import Coupon from "../src/Coupon"
import Item from "../src/Item"
import Order from "../src/Order"

test('Não deve criar pedido com cpf invalido', () => {
    expect(() => new Order('111.111.111-11')).toThrow(new Error('CPF Inválido'))
})

test('Deve criar um pedido com 3 itens (descrição, preço, quantidade)', () => {
    const order = new Order('284.072.770-61')

    order.addItem(new Item(1, 'Guitarra', 1000), 1)
    order.addItem(new Item(2, 'Amplificador', 5000), 1)
    order.addItem(new Item(3, 'Cabo', 30), 3)

    const total = order.getTotal()
    expect(total).toBe(6090)
})

test('Deve criar um pedido com cupom de desconto', () => {
    const order = new Order('284.072.770-61')

    order.addItem(new Item(1, 'Guitarra', 1000), 1)
    order.addItem(new Item(2, 'Amplificador', 5000), 1)
    order.addItem(new Item(3, 'Cabo', 30), 3)
    order.addCoupon(new Coupon('VALE20', 20))

    const total = order.getTotal()
    expect(total).toBe(4872)
})