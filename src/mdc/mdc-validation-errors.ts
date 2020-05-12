import { bindable, Lazy, inject, bindingMode, customAttribute } from "aurelia-framework";
import { ValidationController, ValidationRenderer, RenderInstruction, ValidateResult } from "aurelia-validation";

@inject(Lazy.of(ValidationController), Element)
@customAttribute('mdc-validation-errors')
export class MdcValidationErrorsDeprecated {
    constructor() {
        console.error('This attribute is deprecated. You can safely remove this attribute');
    }
}
