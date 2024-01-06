import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    cpf: Cpf
    orderItems: OrderItem[]
    coupon?: Coupon
    freight = 0

    constructor (cpf: string, readonly date: Date = new Date()){
        this.cpf = new Cpf(cpf)
        this.orderItems = []

    }

    addItem(item: Item, quantity: number) {
        if (item.width && item.heighy && item.length && item.weight){
            const volume = (item.width/100) * (item.heighy/100) * (item.length/100)
            const density = item.weight/volume
            const freight = volume * 1000 * (density/100)
            this.freight += freight * quantity
        }
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

        if (this.coupon) total -= this.coupon.calculateDiscount(total)
        return total
    }

    getFreight() {
        return this.freight
    }
}