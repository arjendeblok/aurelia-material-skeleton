import { bindable, bindingMode, autoinject, computedFrom } from 'aurelia-framework';

import './mdc-card.scss';

export class MdcCard {
    @bindable id: string;
    @bindable cardTitle: string;
    @bindable cardSubtitle: string;
    @bindable mediaUrl: string;

    constructor(private element: Element) {
    }   
}