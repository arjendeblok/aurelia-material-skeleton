import { autoinject, bindable, bindingMode } from 'aurelia-framework';
import { MDCTabBar, MDCTabBarFoundation } from '@material/tab-bar';

import './mdc-tab-bar.scss';

@autoinject()
export class MdcTabBar {
    tabBar: MDCTabBar;
    @bindable selectedTabIndex;

    constructor(private element: Element) {
    }

    attached() {
        const element = this.element.querySelector('.mdc-tab-bar');
        this.tabBar = new MDCTabBar(element);

        element.addEventListener("MDCTabBar:activated", (event: Event) => {
            const tabIndex = (<any>event).detail.index;
            this.selectedTabIndex = tabIndex;
        });
    }
}
