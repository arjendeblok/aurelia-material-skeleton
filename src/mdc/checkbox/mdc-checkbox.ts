import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { MDCCheckbox } from '@material/checkbox';

import './mdc-checkbox.scss';

@autoinject()
export class MdcCheckbox {
    private checkbox: MDCCheckbox;
    @bindable id: string;
    @bindable label: string
    @bindable required: boolean|string;
    @bindable({ defaultBindingMode: bindingMode.fromView }) checked: boolean = false;
    @bindable validationErrors: any[] = [];

    constructor(private element: Element) {
    }

    bind() {
        if(this.required === "true" || this.required === "required") {
            this.required = true;
        }
    }

    attached() {
        const mdcCheckbox = this.element.querySelector(".mdc-checkbox");
        this.checkbox = new MDCCheckbox(mdcCheckbox);
    }

    get valid() {
        return this.validationErrors.length == 0
    }
}