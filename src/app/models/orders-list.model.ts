import { Order } from "./order.model";

export class OrdersList {
    items: Array<Order> = [];

    constructor(resource: any) {
        this.items = this.decodeList(resource)
    }

    decodeList(items) {
        return items.map(
            (item) => new Order(item.id,
                item.name,
                item.date_order
            )
        )
    }

}