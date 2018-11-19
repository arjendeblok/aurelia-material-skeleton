import { autoinject, bindable } from 'aurelia-framework';
import { MDCTopAppBar } from '@material/top-app-bar/dist/mdc.topAppBar';

import './mdc-top-app-bar.scss';

@autoinject()
export class MdcTopAppBar
{
    topAppBar: MDCTopAppBar;
    @bindable title: string = null;
    @bindable fixed: boolean = true;

    constructor(private element:Element) {
    }

    attached()
    {
        var header = this.element.getElementsByTagName("header")[0];
        this.topAppBar = new MDCTopAppBar(header);
    }
}
