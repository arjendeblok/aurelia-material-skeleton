import { bindable, autoinject } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield/dist/mdc.textfield';
import './mdc-text-field.scss';

@autoinject()
export class MdcTextField {
    textField: MDCTextField;
    @bindable id: string;
    @bindable label: string; // translate via t="[label]translatekey"
    @bindable model: object;
    @bindable property: string = "value";
    @bindable type: string = "text";
    @bindable required: boolean = true;
    @bindable disabled: boolean = false;
    @bindable maxlength: number|undefined = undefined;
    @bindable helperText: string;
    @bindable prefilled: boolean = false;
    @bindable autofocus: boolean = false;
    @bindable autocomplete: string = "on";
    valErrors: string[] = [];

    constructor(private element: Element) {
    }

    public created() {
        var isIE11 = (navigator.userAgent.indexOf("Trident") > 0);
        if(this.type=="date" && isIE11) this.type = "text";
    }

    bind(context) {
        if(this.id === undefined) {
            console.error("id not defined");
        }

        if(!this.model) {
            this.model = context;
        }

        const inputElement = this.element.querySelector("input");
        if (inputElement && this.required) {
            inputElement.setAttribute("required", "true");
        }
        if (inputElement && this.disabled) {
            inputElement.setAttribute("disabled", "disabled");
        }
        if (inputElement && this.maxlength) {
            inputElement.setAttribute("maxlength", this.maxlength.toString());
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
        var self = this;
        foundation.isValid = () : boolean => {
            return self.valErrors.length == 0;
        };
    }

    detached() {
        this.textField.destroy();
    }
}
