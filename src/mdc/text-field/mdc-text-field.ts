import { bindable, autoinject, bindingMode } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield/dist/mdc.textfield';
import './mdc-text-field.scss';

@autoinject()
export class MdcTextField {
    textField: MDCTextField;
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
    @bindable validationErrors: any[] = [];

    constructor(private element: Element) {
    }

    get prefilled(): boolean {
        if (this.textField) {
            if (document.activeElement == this.textField.input_)
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

        const inputElement = this.element.querySelector("input");
        if(inputElement) {
            if (this.required == true || 
                this.required == "true" || 
                this.required == "required") {
                inputElement.setAttribute("required", "");
            }
            if (this.disabled == true ||
                this.disabled == "true" ||
                this.disabled == "disabled") {
                inputElement.setAttribute("disabled", "");
            }
            if (this.autofocus == true ||
                this.autofocus == "true" ||
                this.autofocus == "autofocus") {
                inputElement.setAttribute("autofocus", "");
            }
            if (this.maxlength) {
                inputElement.setAttribute("maxlength", this.maxlength.toString());
            }
        }

        const textFieldElement = this.element.querySelector(".mdc-text-field");
        if (textFieldElement && this.disabled) {
            textFieldElement.classList.add("mdc-text-field--disabled");
        }
    }

    attached() {
        const textFieldElement = this.element.querySelector(".mdc-text-field");
        this.textField = new MDCTextField(textFieldElement);

        // override isValid
        const foundation = this.textField.foundation_;
        foundation.isValid = (): boolean => {
            return this.validationErrors.length == 0;
        };
    }

    detached() {
        this.textField.destroy();
    }
}
