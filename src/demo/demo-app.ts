import "@material/typography/mdc-typography.scss";
import "@material/button/mdc-button.scss";
import { inject, NewInstance, bindable } from "aurelia-framework";
import { ValidationRules, ValidationController, ValidateEvent, validateTrigger } from 'aurelia-validation';

import { DemoModel } from './demo-model';

import './demo-app.scss';

@inject(NewInstance.of(ValidationController))
export class DemoApp {
    @bindable demoModel: DemoModel;
    message = 'Hello World!';
    errorMessage: string = "";

    constructor(private controller: ValidationController) {
        this.demoModel = new DemoModel();
    }

    bind() {
        ValidationRules
            .ensure<DemoModel, string>(r => r.input1)
            .required().withMessage("Field 1 is required")
            .email().withMessage("Field 1 must be an email address")
            .maxLength(25).withMessage("Field 1 has a maximum of 25 characters")
            .ensure<number>(r => r.input2)
            .required().withMessage("Field 2 is required")
            .on(this.demoModel);
    }

    get enableSubmit() {
        return this.demoModel.enableSubmit;
    }
}
