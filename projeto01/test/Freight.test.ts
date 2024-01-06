import Freight from "../src/Freight"
import Item from "../src/Item"

test('Deve calcular o frete', () => {
    const freight = new Freight()
    freight.addItem(new Item(1, 'Guitarra', 1000, 100, 30, 10, 3), 1)
    freight.addItem(new Item(2, 'Amplificador', 5000, 50, 50, 50, 20), 1)
    freight.addItem(new Item(3, 'Cabo', 30, 10, 10, 10, 1), 3)
    const total = freight.getTotal()
    expect(total).toBe(260)
})