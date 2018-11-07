import { bindable, autoinject, bindingMode } from 'aurelia-framework';
import { MDCSlider } from '@material/slider/dist/mdc.slider';

import './mdc-slider.scss';

@autoinject()
export class MdcSlider {
    slider: MDCSlider;
    @bindable label: string;
    @bindable discrete: boolean = false;
    @bindable markers: boolean = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value: number = 0;
    @bindable valuemin: number = 0;
    @bindable valuemax: number = 5;
    @bindable disabled: boolean = false;

    constructor(private element: Element) {
    }

    valueChanged(value: number) {
        if (this.slider && this.slider.value != value) {
            this.slider.value = value;
        }
    }

    attached() {
        var item = this.element.getElementsByClassName("mdc-slider")[0];
        this.slider = new MDCSlider(item);

        this.slider.listen('MDCSlider:change', () => {
            this.value = this.slider.value;
        });

        if (this.disabled) {
            item.setAttribute("aria-disabled", "true");
        }
    }

    add() {
        this.value = this.value + 1;
    }
}