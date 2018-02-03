import { ProductsList } from "./products-list.model";

export class Order {
    id: number;
    productsList: ProductsList;
    description: string;

    constructor(id: number,
        productsList: ProductsList,
        description?: string) {
            this.id = id;
            this.productsList = productsList;
            this.description = description;
        }

}