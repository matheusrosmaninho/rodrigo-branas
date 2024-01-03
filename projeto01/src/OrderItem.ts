export default class OrderItem {
    constructor(readonly id: number,readonly price: number, readonly quantity: number){}

    public getTotal() {
        return this.price * this.quantity
    }
}