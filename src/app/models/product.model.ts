

export class Product {
    id: number;
    name: string;
    listPrice: number;
    availability: any;
    companyId: number;
    deliveryCount: number;
    descriptionSale: string;
    imageSmall: any;
    imageMedium: any;
    imageLarge: any;
    isSaleable: boolean;

    constructor(
        id,
        name,
        listPrice,
        availability,
        companyId,
        deliveryCount,
        descriptionSale,
        imageSmall,
        imageMedium,
        imageLarge,
        isSaleable
    ) {
        this.id = id;
        this.name = name;
        this.listPrice = listPrice;
        this.availability = availability;
        this.companyId = companyId;
        this.deliveryCount = deliveryCount;
        this.descriptionSale = descriptionSale;
        this.imageSmall = imageSmall;
        this.imageMedium = imageMedium;
        this.imageLarge = imageLarge;
        this.isSaleable = isSaleable
    }
}