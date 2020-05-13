import { bindable, autoinject, bindingMode } from 'aurelia-framework';
import { ValidationController } from 'aurelia-validation';
import { MDCTextField, MDCTextFieldFoundation, MDCTextFieldHelperText } from '@material/textfield';
import { MdcValidationRenderer } from 'mdc/mdc-validation-renderer';

import './mdc-text-field.scss';

@autoinject()
export class MdcTextField {
    textField: MDCTextField;
    inputElement: HTMLInputElement;

    @bindable id: string;
    @bindable label: string; // translate via t="[label]translatekey"
    @bindable({ defaultBindingMode: bindingMode.fromView }) value: string | number | null;
    @bindable type: string = "text";
    @bindable required: boolean|string = true;
    @bindable disabled: boolean|string = false;
    @bindable maxlength: number|string|undefined = undefined;
    @bindable helperText: string;
    @bindable autofocus: boolean|string = false;
    @bindable autocomplete: string = "on";
    @bindable validationErrors: string[] = [];

    constructor(private element: Element, public controller: ValidationController) {
    }

    get prefilled(): boolean {
        if (this.textField) {
            if (document.activeElement == this.inputElement)
                return true;

            return this.value != undefined && this.value !== "" && this.value != null;
        }
        return false;
    }

    public created() {
        var isIE11 = (navigator.userAgent.indexOf("Trident") > 0);
        if (this.type == "date" && isIE11) this.type = "text";
    }

    bind(context) {
        if (this.id === undefined) {
            console.error("id not defined");
        }

        this.inputElement = this.element.querySelector("input");
        if(this.inputElement) {
            if (this.required == true || 
                this.required == "true" || 
                this.required == "required") {
                this.inputElement.setAttribute("required", "");
            }
            if (this.disabled == true ||
                this.disabled == "true" ||
                this.disabled == "disabled") {
                this.inputElement.setAttribute("disabled", "");
            }
            if (this.autofocus == true ||
                this.autofocus == "true" ||
                this.autofocus == "autofocus") {
                this.inputElement.setAttribute("autofocus", "");
            }
            if (this.maxlength) {
                this.inputElement.setAttribute("maxlength", this.maxlength.toString());
            }
        }

        const textFieldElement = this.element.querySelector(".mdc-text-field");
        if (textFieldElement && this.disabled) {
            textFieldElement.classList.add("mdc-text-field--disabled");
        }

        this.inputElement.onblur = (ev: FocusEvent) => {
            this.element.dispatchEvent(new FocusEvent("blur"));
        };
    }

    attached() {
        const textFieldElement = this.element.querySelector(".mdc-text-field");
        this.textField = new MDCTextField(textFieldElement);

        // override isValid
        const foundation = (<any>this.textField).foundation_;
        foundation.isValid = (): boolean => {
            return this.validationErrors.length == 0;
        };

        const helperText = new MDCTextFieldHelperText(this.element.querySelector('.mdc-text-field-helper-text'));

        this.controller.addRenderer(new MdcValidationRenderer(
            () => this.controller, this.element, this.validationErrors));      
    }

    detached() {
        this.textField.destroy();
    }
}
