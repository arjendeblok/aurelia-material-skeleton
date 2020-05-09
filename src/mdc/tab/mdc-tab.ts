import { autoinject, bindable, bindingMode } from 'aurelia-framework';
import { MDCTab, MDCTabFoundation } from '@material/tab/index';

import './mdc-tab.scss';

@autoinject()
export class MdcTab {
    tab: MDCTab;
    @bindable id: string;
    @bindable label: string;
    @bindable({defaultBindingMode: bindingMode.toView}) active: boolean = false;

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

    activeChanged() {
        if (this.active) {
            const element = this.element.querySelector('.mdc-tab');
            const elementIndicator = this.element.querySelector('.mdc-tab-indicator');
            element.classList.add("mdc-tab--active");
            elementIndicator.classList.add("mdc-tab-indicator--active");
        } else {
            const element = this.element.querySelector('.mdc-tab');
            const elementIndicator = this.element.querySelector('.mdc-tab-indicator');
            element.classList.remove("mdc-tab--active");
            elementIndicator.classList.remove("mdc-tab-indicator--active");
        }
    }
}