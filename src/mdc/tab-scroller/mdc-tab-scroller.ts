import { autoinject } from 'aurelia-framework';
import { MDCTabScroller, MDCTabScrollerFoundation } from '@material/tab-scroller';

import './mdc-tab-scroller.scss';

@autoinject()
export class MdcTabScroller {
    tabScroller: MDCTabScroller;

    constructor(private element: Element) {
    }

    attached() {
        const element = this.element.querySelector('.mdc-tab-scroller');
        this.tabScroller = new MDCTabScroller(element);
    }
}
