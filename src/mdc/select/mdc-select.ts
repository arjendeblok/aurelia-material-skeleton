import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { MDCSelect } from '@material/select/dist/mdc.select';

import './mdc-select.scss';

@autoinject()
export class MdcSelect
{
    select: MDCSelect;
    @bindable id: string;
    @bindable label: string;
    @bindable({defaultBindingMode: bindingMode.twoWay}) selected: any;
    @bindable choose: string;
    @bindable options: string;
    @bindable required: boolean|string = true;
    @bindable helperText: string;
    @bindable validationErrors: any[] = [];
 
    constructor(private element: Element){   
    }

    bind() {
        if(this.required === "true" || this.required === "required") {
            this.required = true;
        }
    }

    attached()
    {
        const selectElement = this.element.getElementsByClassName("mdc-select")[0];
        this.select = new MDCSelect(selectElement);
    }
}