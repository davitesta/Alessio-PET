export class Order {
    id: number;
    name: string;
    dateOrder: Date;

    constructor(id: number,
        name: string,
        dateOrder: Date) {
            this.id = id;
            this.name = name;
            this.dateOrder = dateOrder;
    }

}