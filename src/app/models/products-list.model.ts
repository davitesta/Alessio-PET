import { Product } from "./product.model";

export class ProductsList {
    items: Array<Product> = [];

    constructor(resource: any) {
        this.items = this.decodeList(resource);
    }

    decodeList(items) {
        return items.map(
            (item) => new Product(
                item.id,
                item.name,
                item.list_price,
                item.availability,
                item.company_id,
                item.delivery_count,
                item.description_sale,
                item.image_small,
                item.image_medium,
                item.image_large,
                item.sale_ok
            )
        )
    }
}