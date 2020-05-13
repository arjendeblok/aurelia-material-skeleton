import "@material/typography/mdc-typography.scss";
import "@material/button/mdc-button.scss";
import { inject, NewInstance, bindable } from "aurelia-framework";
import { ValidationRules, ValidationController, ValidateEvent, validateTrigger } from 'aurelia-validation';

import { DemoModel } from './demo-model';

import './demo-app.scss';

@inject(NewInstance.of(ValidationController))
export class DemoApp {
    @bindable demoModel: DemoModel;
    message = 'Demo Application MDC Components';
    errorMessage: string = "";
    selectedTab: number = 0;

    constructor(private controller: ValidationController) {
        this.demoModel = new DemoModel();
    }

    bind() {
        ValidationRules
            .ensure<DemoModel, string>(r => r.name)
              .required().withMessage("Name is required")
              .minLength(5)
              .maxLength(25)
              .then()
              .matches(/.+ .+/).withMessage("Name must contain first and last name")
            .ensure(r => r.email)
              .required().withMessage("e-Mail is required")
            .email().withMessage("Must be a valid email address")
              .maxLength(25).withMessage("Email has a maximum of 25 characters")
            .ensure<number>(r => r.numeric)
              .required().withMessage("Numeric is required")
              .between(1, 100).withMessage("Numeric must be between 1 and 100")
            .ensure<boolean>(r => r.checked)
               .satisfies((value) => value).withMessage("Checked must be checked")
            .ensure<string>(r => r.selected1)
               .required().withMessage("A first fruit must be selected")
            .ensure<number>(r => r.selected2)
               .required().withMessage("A second fruit must be selected")
            .on(this.demoModel);
    }

    attached() {
    }

    get enableSubmit() {
        return this.demoModel.enableSubmit;
    }

    async submit() {
        var result = await this.controller.validate();
        if(!result.valid) {
          alert('input validation failed; see error list');
        }
    }
}
