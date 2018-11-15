import { autoinject, bindable, bindingMode } from 'aurelia-framework';
import { MDCTab, MDCTabFoundation } from '@material/tab/dist/mdc.tab';

import '@material/tab/mdc-tab.scss';

@autoinject()
export class MdcTab {
    tab: MDCTab;
    @bindable id: string;
    @bindable label: string;
    @bindable({defaultBindingMode: bindingMode.oneTime}) active: boolean = false;

    constructor(private element: Element) {
    }

    bind() {
        if (this.active) {
            const element = this.element.querySelector('.mdc-tab');
            const elementIndicator = this.element.querySelector('.mdc-tab-indicator');
            element.classList.add("mdc-tab--active");
            elementIndicator.classList.add("mdc-tab-indicator--active");
        }
    }

    attached() {
        const element = this.element.querySelector('.mdc-tab');
        this.tab = new MDCTab(element);
    }
}