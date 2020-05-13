import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { ValidationController } from 'aurelia-validation';
import { MDCSwitch } from '@material/switch';
import { MdcValidationRenderer } from 'mdc/mdc-validation-renderer';

import './mdc-switch.scss';

@autoinject()
export class MdcSwitch {
    private switch: MDCSwitch;
    @bindable id: string;
    @bindable label: string
    @bindable required: boolean|string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) checked: boolean = false;
    @bindable validationErrors: any[] = [];

    constructor(private element: Element, public controller: ValidationController) {
    }

    bind() {
        if(this.required === "true" || this.required === "required") {
            this.required = true;
        }
    }

    attached() {
        const element = this.element.querySelector(".mdc-switch");
        const inputElement = element.querySelector("input");
        inputElement.onblur = (ev: FocusEvent) => {
            this.element.dispatchEvent(new FocusEvent("blur"));
        };
        this.switch = new MDCSwitch(element);

        this.controller.addRenderer(new MdcValidationRenderer(
            () => this.controller, this.element, this.validationErrors));      
    }

    get valid() {
        return this.validationErrors.length == 0;
    }
}
