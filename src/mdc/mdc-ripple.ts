
import {bindable, customAttribute, inject, DOM} from 'aurelia-framework';
import {MDCRipple} from '@material/ripple';
import '@material/ripple/mdc-ripple.scss';

@customAttribute('mdc-ripple')
@inject(Element)
export class MdcRipple {
    @bindable() unbounded = false;
    mdcRipple: MDCRipple;

    constructor(private element: Element) { }

    bind() {
        this.mdcRipple = new MDCRipple(this.element);
    }

    attached() {
        this.element.classList.add('mdc-ripple-surface');
        this.element.classList.add('mdc-ripple-surface--primary');
    }

    detached() {
        this.mdcRipple.destroy();
    }

    unboundedChanged(newValue) {
        this.mdcRipple.unbounded = (newValue === true || newValue === 'true');
    }
}