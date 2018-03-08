export class Customer {
    id: number;
    contactAddress: string;

    constructor(
        id,
        contactAddress
    ) {
        this.id = id;
        this.contactAddress = contactAddress;

    }

    getContactAddress(){
        return this.contactAddress;
    }
    
}