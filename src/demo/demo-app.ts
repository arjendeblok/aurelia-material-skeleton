
import "@material/typography/mdc-typography.scss";
import "@material/button/mdc-button.scss";
import { inject, NewInstance, bindable } from "aurelia-framework";
import { ValidationRules, ValidationController, ValidateEvent, validateTrigger } from 'aurelia-validation';

import { DemoModel } from './demo-model';

@inject(NewInstance.of(ValidationController))
export class DemoApp {
    @bindable demoModel: DemoModel;
    message = 'Hello World!';
    errorMessage: string = "";

    constructor(private controller: ValidationController) {
        this.demoModel = new DemoModel();
    }

    bind() {
        console.log("Login binding");

        ValidationRules
            .ensure<DemoModel, string>(r => r.input1)
            .required().withMessage("Veld 1 is verplicht")
            .email().withMessage("Veld 1 moet een emailadres zijn")
            .ensure<number>(r => r.input2)
            .required().withMessage("Veld 2 is verplicht")
            .on(this.demoModel);
    }

    get enableSubmit() {
        return this.demoModel.enableSubmit;
    }
}
