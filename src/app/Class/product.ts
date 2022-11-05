export class Product {
    name: string = '';
    description: string = '';
    price: number = 0;
    constructor(name: string, description: string, price: number) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}