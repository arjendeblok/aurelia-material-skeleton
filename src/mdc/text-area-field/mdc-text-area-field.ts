import { bindable, autoinject, bindingMode, factory } from 'aurelia-framework';
import { MDCTextField, MDCTextFieldFoundation } from '@material/textfield/index';
import './mdc-text-area-field.scss';

@autoinject()
export class MdcTextAreaField {
  textField: MDCTextField;
  @bindable id: string;
  @bindable label: string; // translate via t="[label]translatekey"
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value: string | number | null;
  @bindable rows: number;
  @bindable cols: number;
  @bindable useCounter: boolean = false;
  @bindable required: boolean | string = true;
  @bindable disabled: boolean | string = false;
  @bindable maxlength: number | string | undefined = undefined;
  @bindable helperText: string;
  @bindable autofocus: boolean | string = false;
  @bindable validationErrors: any[] = [];

  constructor(private element: Element) {
  }

  get prefilled(): boolean {
    if (this.textField) {
      var input = this.textField.root_.querySelector("textarea");

      if (document.activeElement == input)
        return true;

      return this.value != undefined && this.value !== "" && this.value != null;
    }
    return false;
  }

  bind(context) {
    if (this.id === undefined) {
      console.error("id not defined");
    }

    const textAreaElement = this.element.querySelector("textarea");
    if (textAreaElement) {
      if (this.required == true ||
        this.required == "true" ||
        this.required == "required") {
        textAreaElement.setAttribute("required", "");
      }
      if (this.disabled == true ||
        this.disabled == "true" ||
        this.disabled == "disabled") {
        textAreaElement.setAttribute("disabled", "");
      }
      if (this.autofocus == true ||
        this.autofocus == "true" ||
        this.autofocus == "autofocus") {
        textAreaElement.setAttribute("autofocus", "");
      }
      if (this.maxlength) {
        textAreaElement.setAttribute("maxlength", this.maxlength.toString());
      }
    }

    const textFieldElement = this.element.querySelector(".mdc-text-field");
    if (textFieldElement && this.disabled) {
      textFieldElement.classList.add("mdc-text-field--disabled");
    }
  }

  attached() {
    var foundation = new MDCTextFieldFoundation();
    // override isValid
    foundation.isValid = (): boolean => {
      return this.validationErrors.length == 0;
    };
    const textFieldElement = this.element.querySelector(".mdc-text-field");
    this.textField = new MDCTextField(textFieldElement);
  }

  detached() {
    this.textField.destroy();
  }
}
