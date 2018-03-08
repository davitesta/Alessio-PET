export class Order {
    id: number;
    name: string;
    dateOrder: Date;
    amountTax: number;
    amountUntaxed: number;
    amountTotal: number;
    cartQuantity: number;
    confirmationDate: Date;
    orderLines: Array<number>;   /*  order line ids  */
    paymentAcquirerId: [number, string];
    paymentTermId: [number, string];
    partnerId: [number, string];
    partnerInvoiceId: [number, string];
    partnerShippingId: [number, string];
    invoiceCount: number;
    invoiceIds: any;
    invoiceStatus: any;
    state: any

    constructor(
       resource: any
    ) {
        this.id = resource.id;
        this.name = resource.name;
        this.dateOrder = resource.date_order;
        this.amountTax = resource.amount_tax;
        this.amountUntaxed = resource.amount_untaxed;
        this.amountTotal = resource.amount_total;
        this.cartQuantity = resource.cart_quantity;
        this.confirmationDate = resource.confirmation_date;
        this.orderLines = resource.order_line;
        this.paymentAcquirerId = resource.payment_acquirer_id;
        this.paymentTermId = resource.payment_term_id;
        this.partnerId = resource.partner_id;
        this.partnerInvoiceId = resource.partner_invoice_id;
        this.partnerShippingId = resource.partner_shipping_id;
        this.invoiceCount = resource.invoice_count;
        this.invoiceIds = resource.invoice_ids;
        this.invoiceStatus = resource.invoice_status;
        this.state = resource.state;
    }

}

/*
        id,
        name,
        dateOrder,
        amountTax,
        amountUntaxed,
        amountTotal,
        cartQuantity,
        confirmationDate,
        orderLines,
        paymentAcquirerId,
        paymentTermId,
        partnerId,
        partnerInvoiceId,
        partnerShippingId,
        invoiceCount,
        invoiceIds,
        invoiceStatus,
        state
        */