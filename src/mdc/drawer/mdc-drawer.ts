import { autoinject, bindable } from 'aurelia-framework';
import { MDCDrawer } from '@material/drawer/dist/mdc.drawer';

import './mdc-drawer.scss';

@autoinject()
export class MdcDrawer {
    drawer: MDCDrawer;
    @bindable modal: boolean = false;
    @bindable dismissible: boolean = false;
    @bindable title: string = null;
    @bindable subtitle: string = null;
    @bindable mainContentSelector = "main";

    constructor(private element: Element) {
    }

    attached() {
        if (this.modal || this.dismissible) {
            const drawerElement = this.element.querySelector(".mdc-drawer");
            const listElement = this.element.querySelector(".mdc-drawer .mdc-list");

            this.drawer = new MDCDrawer(drawerElement);
            listElement.addEventListener('click', (event) => {
                this.drawer.open = false;
            });

            if (this.modal) {
                // set focus to first input or button afer drawer is closed
                const mainContentElelement = document.querySelector(this.mainContentSelector);
                const topBarElement = document.querySelector('.mdc-top-app-bar');
                topBarElement.addEventListener("MDCTopAppBar:nav", () => {
                    this.drawer.open = true;
                });

                document.body.addEventListener('MDCDrawer:closed', () => {
                    var selector = mainContentElelement.querySelector('input, button');
                    if (selector) {
                        (<HTMLElement> selector).focus();
                    }
                });
            }
        }
    }
}
