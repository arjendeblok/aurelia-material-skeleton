import { bindable, Lazy, inject, bindingMode, customAttribute } from "aurelia-framework";
import { ValidationController, ValidationRenderer, RenderInstruction, ValidateResult } from "aurelia-validation";

@inject(Lazy.of(ValidationController), Element)
export class MdcValidationRenderer implements ValidationRenderer {
    internalErrors: ValidateResult[] = [];

    @bindable({ defaultBindingMode: bindingMode.oneWay })
    public controller: ValidationController | null = null;

    constructor(private controllerAccessor: () => ValidationController,
        private element: Element,
        private validationErrorsElement: string[]) {
    }

    bind(context: any) {
        this.controller = this.controllerAccessor();
        this.controller.addRenderer(this);
    }

    public unbind() {
        this.controller.removeRenderer(this);
    }

    public render(instruction: RenderInstruction) {
        for (const { result } of instruction.unrender) {
            const index = this.internalErrors.findIndex(x => x === result);
            if (index !== -1) {
                this.internalErrors.splice(index, 1);
            }
        }

        for (const { result, elements } of instruction.render) {
            var targets = elements.filter(e => this.element == e);
            if (targets.length > 0) {
                this.internalErrors.push(result);
            }
        }

        const validationErrors = this.internalErrors.filter(e => !e.valid).map(e => e.message);
        this.validationErrorsElement.splice(0);
        this.validationErrorsElement.push(...validationErrors);
    }
}
