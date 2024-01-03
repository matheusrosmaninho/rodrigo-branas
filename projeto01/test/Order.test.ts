import Order from "../src/Order"

test('Não deve criar pedido com cpf invalido', () => {
    expect(() => new Order('111.111.111-11')).toThrow(new Error('CPF Inválido'))
})
