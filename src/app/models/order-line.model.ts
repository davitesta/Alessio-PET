export class OrderLine {
    id: number;
    name: string;
    companyId: [number, string]
    orderId: [number, string];
    orderPartnerId: [number, string];
    priceReduce: number;
    priceReduceTaxExcl: number;
    priceReduceTaxIncl: number;
    priceSubtotal: number;
    priceTotal: number;
    priceTax: number;
    discount: number;
    priceUnit: number;
    productId: [number, string];
    productUom: number;
    productUomQty: number;
    qtyDelivered: number;
    qtyDeliveredUpdateable: boolean;
    state: any;
    taxId: [number, string];
    updateDate: Date;
    currencyId: [number, string];
    customerLead: number;

    /*
        id,
        name,
        companyId,
        orderId,
        orderPartnerId,
        priceReduce,
        priceReduceTaxExcl,
        priceReduceTaxIncl,
        priceSubtotal,
        priceTotal,
        discount,
        priceUnit,
        productId,
        productUom,
        productUomQty,
        qtyDelivered,
        qtyDeliveredUpdateable,
        state,
        taxId,
        updateDate,
        currencyId,
        customerLead
    */
    constructor(
        resource: any
    ) {
        this.id = resource.id;
        this.name = resource.name;
        this.companyId = resource.company_id;
        this.orderId = resource.order_id;
        this.orderPartnerId = resource.order_partner_id;
        this.priceReduce = resource.price_reduce;
        this.priceReduceTaxExcl = resource.price_reduce_taxexcl;
        this.priceReduceTaxIncl = resource.price_reduce_taxincl;
        this.priceSubtotal = resource.price_subtotal;
        this.priceTotal = resource.price_total;
        this.priceTax = resource.price_tax;
        this.discount = resource.discount;
        this.priceUnit = resource.price_unit;
        this.productId = resource.product_id;
        this.productUom = resource.product_uom;
        this.productUomQty = resource.product_uom_qty;
        this.qtyDelivered = resource.qty_delivered;
        this.qtyDeliveredUpdateable = resource.qty_delivered_updateable;
        this.state = resource.state;
        this.taxId = resource.tax_id;
        this.updateDate = resource.write_date;
        this.currencyId = resource.currency_id;
        this.customerLead = resource.customer_lead;
    }
}