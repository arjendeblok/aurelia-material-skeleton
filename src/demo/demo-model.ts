
export class DemoModel {
    input1: string = "";
    input2: number = 0;

    get enableSubmit() {
        return this.input1.length > 0;
    }
}
