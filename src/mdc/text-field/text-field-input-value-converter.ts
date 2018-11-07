import { autoinject } from 'aurelia-framework';

@autoinject()
export class TextFieldInputValueConverter {
    constructor() {

    }

    fromView(inputString: string, type: string): string | number | null {
        if (type == "number") {
            if (inputString.length == 0) return null;
            return Number.parseFloat(inputString);
        }
        return inputString;
    }

    toView(bound: string | number | null): string {
        if (bound == null) return "";
        if (typeof (bound) == "string") return bound;
        if (typeof (bound) == "number") return bound.toString();
    }
}