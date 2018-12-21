import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { MDCSwitch } from '@material/switch/dist/mdc.switch';

import './mdc-switch.scss';

@autoinject()
export class MdcSwitch {
    private switch: MDCSwitch;
    @bindable id: string;
    @bindable label: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) checked: boolean = false;

    constructor(private element: Element) {
    }

    attached() {
        const element = this.element.querySelector(".mdc-switch");
        this.switch = new MDCSwitch(element);
    }
}