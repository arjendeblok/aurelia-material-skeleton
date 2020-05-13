import { bindable, autoinject, bindingMode } from 'aurelia-framework';
import { MDCSlider } from '@material/slider';

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
        var item = this.element.querySelector('.mdc-slider');
        this.slider = new MDCSlider(item);

        this.slider.listen('MDCSlider:change', () => {
            this.value = this.slider.value;
        });

        if (this.disabled) {
            item.setAttribute("aria-disabled", "true");
        }

        setInterval(() => {
            // if slider was not visible when attached then the rect variable of foundation was not set correctly
            var s = <any> this.slider;
            if(s.foundation_.rect_.width == 0) {
                s.foundation_.rect_ = s.foundation_.adapter_.computeBoundingRect();
            }
        }, 200);
    }

    add() {
        this.value = this.value + 1;
    }
}