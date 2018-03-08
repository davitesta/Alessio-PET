import { Product } from "./product.model";

export class ProductsList {
    items: Array<Product> = [];

    constructor(resource: any) {
        this.items = this.decodeList(resource);
    }

    decodeList(items) {
        return items.map(
            (item) => new Product(item)
        )
    }
}