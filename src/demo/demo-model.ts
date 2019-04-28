
interface Fruit {
    name: string;
    value: string;
}

export class DemoModel {
    email: string = "";
    numeric: number = null;
    checked: boolean = false;
    selected1: string = "";
    selected2: string = "";
    fruits: Fruit[] = [{name:"Banana", value:"banana"}, {name:"Orange", value:"orange"}, {name:"Apple", value:"apple"}, ]

    get percentage() : number {
        return this.numeric / 100;
    }

    get enableSubmit() {
        return this.email.length > 0;
    }
}
