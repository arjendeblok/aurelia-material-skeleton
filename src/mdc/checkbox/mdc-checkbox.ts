import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { ValidationController } from 'aurelia-validation';
import { MDCCheckbox } from '@material/checkbox';
import { MdcValidationRenderer } from 'mdc/mdc-validation-renderer';

import './mdc-checkbox.scss';

@autoinject()
export class MdcCheckbox {
    private checkbox: MDCCheckbox;
    @bindable id: string;
    @bindable label: string
    @bindable required: boolean|string;
    @bindable({ defaultBindingMode: bindingMode.fromView }) checked: boolean = false;
    @bindable validationErrors: any[] = [];

    constructor(private element: Element, private controller: ValidationController) {
    }

    bind() {
        if(this.required === "true" || this.required === "required") {
            this.required = true;
        }
    }

    attached() {
        const mdcCheckbox = this.element.querySelector(".mdc-checkbox");
        const inputElement = mdcCheckbox.querySelector("input");
        inputElement.onblur = (ev: FocusEvent) => {
            this.element.dispatchEvent(new FocusEvent("blur"));
        };
        this.checkbox = new MDCCheckbox(mdcCheckbox);
 
        this.controller.addRenderer(new MdcValidationRenderer(
            () => this.controller, this.element, this.validationErrors));      
   }

    get valid() {
        return this.validationErrors.length == 0
    }
}