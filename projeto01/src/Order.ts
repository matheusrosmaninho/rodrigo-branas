import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Freight from "./Freight";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    cpf: Cpf
    orderItems: OrderItem[]
    coupon?: Coupon
    freight = new Freight()

    constructor (cpf: string, readonly date: Date = new Date()){
        this.cpf = new Cpf(cpf)
        this.orderItems = []

    }

    addItem(item: Item, quantity: number) {
        this.freight.addItem(item, quantity)
        this.orderItems.push(new OrderItem(item.id, item.price, quantity))
    }

    addCoupon(coupon: Coupon) {
        if (coupon.isExpired(this.date)) return
        this.coupon = coupon
    }

    getTotal() {
        let total = this.orderItems.reduce((total, orderItem) => {
            total += orderItem.getTotal()
            return total
        }, 0)

        if (this.coupon && !this.coupon.isExpired(this.date)) total -= this.coupon.calculateDiscount(total)
        total += this.freight.getTotal()
        return total
    }

    getFreight() {
        return this.freight.getTotal()
    }
}