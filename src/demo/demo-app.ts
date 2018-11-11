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
            .ensure<DemoModel, string>(r => r.email)
            .required().withMessage("e-mail is required")
            .email().withMessage("Must be a valid email address")
            .maxLength(25).withMessage("Email has a maximum of 25 characters")
            .ensure<number>(r => r.numeric)
            .required().withMessage("Numeric is required")
            .on(this.demoModel);
    }

    get enableSubmit() {
        return this.demoModel.enableSubmit;
    }
}