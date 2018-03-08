

export class Product {
    id: number;
    name: string;
    listPrice: number;
    availability: any;
    companyId: [number, string];
    deliveryCount: number;
    descriptionSale: string;
    largeImage: any;    /*  base64 encoded  */
    smallImage: any;
    mediumImage: any;
    saleable: boolean;
    purchasable: boolean;

    constructor(
        resource: any
    ) {
        this.id = resource.id;
        this.name = resource.name;
        this.listPrice = resource.list_price;
        this.availability = resource.availability;
        this.companyId = resource.company_id;
        this.deliveryCount = resource.delivery_count;
        this.descriptionSale = resource.description_sale;
        this.largeImage = resource.image;
        this.smallImage = resource.image_small;
        this.mediumImage = resource.image_medium;
        this.saleable = resource.sale_ok;
        this.purchasable = resource.purchase_ok;
    }
}
        /*
        id,
        name,
        listPrice,
        availability,
        companyId,
        deliveryCount,
        descriptionSale,
        largeImage,
        smallImage,
        mediumImage,
        saleable,
        purchasable
        */