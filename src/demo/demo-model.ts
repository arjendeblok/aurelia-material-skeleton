
interface Fruit {
    name: string;
    value: string;
}

export class DemoModel {
    email: string = "";
    numeric: number|undefined = undefined;
    checked: boolean = false;
    selected1: string = null;
    selected2: number = 102;

    get percentage() : number {
        return this.numeric / 100;
    }

    get enableSubmit() {
        return this.email.length > 0;
    }
}
