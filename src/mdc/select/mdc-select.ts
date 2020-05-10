import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { MdcSelectBindOption } from './mdc-select-bind-option';
import { MDCSelect } from '@material/select';
import {MDCSelectHelperText} from '@material/select/helper-text';
import './mdc-select.scss';

@autoinject()
export class MdcSelect {
  selectElement: Element;
  labelElement: Element;
  select: MDCSelect;
  @bindable id: string;
  @bindable label: string;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) selected: any;
  @bindable required: boolean | string = true;
  @bindable helperText: string;
  @bindable validationErrors: any[] = [];
  @bindable selectOptions: MdcSelectBindOption[] = [];
  selectedText: string = "";

  constructor(private element: Element) {
  }

  bind() {
    if (this.required === "true" || this.required === "required") {
      this.required = true;
    }
  }

  attached() {
    this.selectElement = this.element.getElementsByClassName("mdc-select")[0];
    this.labelElement = this.element.getElementsByClassName("mdc-floating-label")[0];
    this.select = new MDCSelect(this.selectElement);
    this.select.required = <boolean>this.required;

    var helperTextElement = this.element.querySelector('.mdc-select-helper-text');
    const helperText = new MDCSelectHelperText(helperTextElement);

    this.select.listen('MDCSelect:change', () => this.onSelectChange());

    const foundation = (<any>this.select).foundation_;
    var handleBlur_ = foundation.handleBlur;
    foundation.handleBlur = (): void => {
      handleBlur_.call(foundation);
      this.element.dispatchEvent(new FocusEvent("blur"));
    };

    this.selectedChanged();
  }

  onSelectChange() {
    if (this.select.selectedIndex >= 0) {
      let newValue = this.selectOptions[this.select.selectedIndex].dataValue;
      if (newValue != this.selected) {
        this.selected = newValue;
        this.selectedText = this.selectOptions[this.select.selectedIndex].value;
        // console.log(`mdc-select.onSelectChange ${this.id}: selected set to ${this.selectedText} and value`, newValue);
      }
    }
    else {
      if (this.selected != null) {
        this.selected = null;
      }
    }
  }

  selectedChanged() {
    let toSelect = this.select.selectedIndex;
    for (var option of this.selectOptions) {
      if (option.dataValue == this.selected) {
        toSelect = option.index;
      }
    }

    if (toSelect != this.select.selectedIndex) {
      // console.log(`mdc-select.selectedChanged ${this.id}: selectedIndex ${this.select.selectedIndex} to ${toSelect} from data-value`, this.selected);

      this.select.selectedIndex = toSelect;
      this.selectedText = this.selectOptions[toSelect].value;

      const selectedSet = this.selected !== undefined && this.selected !== null && this.selected !== "";
      if (selectedSet) {
        this.labelElement.classList.add("mdc-floating-label--float-above");
      }
      else {
        this.labelElement.classList.remove("mdc-floating-label--float-above");
      }
    }
  }
}
