
export class DemoModel {
    email: string = "";
    numeric: number = null;
    checked: boolean = false;
    selected: string = "";

    get percentage() : number {
        return this.numeric / 100;
    }

    get enableSubmit() {
        return this.email.length > 0;
    }
}
