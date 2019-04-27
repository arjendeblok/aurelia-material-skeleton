import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio/index';

import './mdc-radio.scss';

@autoinject()
export class MdcRadio {
  formField: MDCFormField;
  radio: MDCRadio;
  @bindable id: string;
  @bindable label: string;
  @bindable name: string;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) model: any;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) checked: any;

  constructor(private element: Element) {
  }

  bind() {
  }

  attached() {
    const element = this.element.querySelector(".mdc-radio");
    this.radio = new MDCRadio(element);

    const formFieldElement = this.element.querySelector('.mdc-form-field');
    this.formField = new MDCFormField(formFieldElement);
    this.formField.input = this.radio;
  }
}
