import { bindable, Lazy, inject, bindingMode, customAttribute } from "aurelia-framework";
import { ValidationController, ValidationRenderer, RenderInstruction, ValidateResult } from "aurelia-validation";

@inject(Lazy.of(ValidationController), Element)
@customAttribute('mdc-validation-errors')
export class MdcValidationRenderer implements ValidationRenderer {
    @bindable internalErrors: ValidateResult[] = [];

    @bindable({ defaultBindingMode: bindingMode.oneWay })
    public controller: ValidationController | null = null;

    constructor(private controllerAccessor: () => ValidationController, private element: Element) {
    }

    bind(context: any) {
        this.controller = this.controllerAccessor();
        this.controller.addRenderer(this);

        const inputElement = this.element.querySelector("input");
        if (inputElement) {
            inputElement.onblur = (ev: FocusEvent) => {
                //var event = new FocusEvent("blur"); NOT WORKING IN IE11
                var event = document.createEvent("FocusEvent");
                event.initEvent("blur", false, false);
                this.element.dispatchEvent(event);
            };
        }
        const selectElement = this.element.querySelector("select");
        if (selectElement) {
            selectElement.onblur = (ev: FocusEvent) => {
                var event = document.createEvent("FocusEvent");
                event.initEvent("blur", false, false);
                this.element.dispatchEvent(event);
            };
        }
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
            var targets = elements.filter(e => e.contains(this.element));
            if (targets.length > 0) {
                this.internalErrors.push(result);
            }
        }

        // try to update the errors bindable property for the custom element where this is an custom attribute of
        const au = (<any>this.element).au;
        if (au) {
            const viewModel = au.controller.viewModel;
            if (viewModel) {
                const validationErrors = this.internalErrors.filter(e => !e.valid).map(e => e.message);
                viewModel.validationErrors = validationErrors;
            }
        }
    }
}
