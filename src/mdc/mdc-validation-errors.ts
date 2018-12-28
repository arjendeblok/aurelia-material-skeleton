import { bindable, Lazy, inject, bindingMode, customAttribute } from "aurelia-framework";
import { ValidationController, ValidationRenderer, RenderInstruction } from "aurelia-validation";

@inject(Lazy.of(ValidationController), Element)
@customAttribute('mdc-validation-errors')
export class MdcValidationRenderer implements ValidationRenderer {
    @bindable internalErrors: any[] = [];

    @bindable({ defaultBindingMode: bindingMode.oneWay })
    public controller: ValidationController | null = null;

    constructor(private controllerAccessor: () => ValidationController, private element: Element) {
    }

    bind(context: any) {
        this.controller = this.controllerAccessor();
        this.controller.addRenderer(this);
    }

    public render(instruction: RenderInstruction) {
        if (instruction.kind == "validate") {

            // build internal errors
            this.internalErrors.splice(0);
            if (instruction.render.length > 0) {
                for (var resultInstruction of instruction.render) {
                    if (resultInstruction.elements.length > 0) {
                        var resultElement = resultInstruction.elements[0];
                        if (resultElement.contains(this.element)) {
                            if (!resultInstruction.result.valid) {
                                this.internalErrors.push(resultInstruction.result.message);
                            }
                        }
                    }
                }
            }

            // try to update the errors bindable property for the custom element where this is an custom attribute of
            const au = (<any>this.element).au;
            if (au) {
                const viewModel = au.controller.viewModel;
                if (viewModel) {
                    viewModel.validationErrors = this.internalErrors;
                }
            }
        }
    }
}
