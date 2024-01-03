import Cpf from "../src/Cpf"

test('CPF invalido com menos de 11 digitos', () => {
    expect(() => new Cpf('1111')).toThrow('CPF Inválido')
})

const wrongSameDigitCpf = [
    '111.111.111-11',
    '222.222.222-22',
    '333.333.333.33',
    '444.444.444-44',
    '555.555.555-55',
    '666.666.666-66',
    '777.777.777-77',
    '888.888.888-88',
    '999.999.999-99',
    '000.000.000-00'
]

test.each(wrongSameDigitCpf)('CPF inválido com 11 digitos iguais', (cpf) => {
    expect(() => new Cpf(cpf)).toThrow('CPF Inválido')
})

test('CPF válido sem mascara', () => {
    const cpf = `28407277061`
    const isValidCpf = new Cpf(cpf)

    expect(isValidCpf).toBeTruthy()
})

test('CPF válido com mascara', () => {
    const cpf = `284.072.770-61`
    const isValidCpf = new Cpf(cpf)
    expect(isValidCpf).toBeTruthy()
})
