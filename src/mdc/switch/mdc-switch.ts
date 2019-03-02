import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { MDCSwitch } from '@material/switch/index';

import './mdc-switch.scss';

@autoinject()
export class MdcSwitch {
    private switch: MDCSwitch;
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
        const element = this.element.querySelector(".mdc-switch");
        this.switch = new MDCSwitch(element);
    }

    get valid() {
        return this.validationErrors.length == 0;
    }
}