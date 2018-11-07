
export class DemoModel {
    email: string = "";
    numeric: number = 1;
    checked: boolean = false;

    get percentage() : number {
        return this.numeric / 100;
    }

    get enableSubmit() {
        return this.email.length > 0;
    }
}
