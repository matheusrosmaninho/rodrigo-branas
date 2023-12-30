import { validateCpf } from "../../src/example02/afterCpf"

test('CPF invalido com menos de 11 digitos', () => {
    const isValidCpf = validateCpf('1111')
    expect(isValidCpf).toBeFalsy()
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
    const isValidCpf = validateCpf(cpf)
    expect(isValidCpf).toBeFalsy()
})

test('CPF válido sem mascara', () => {
    const cpf = `28407277061`
    const isValidCpf = validateCpf(cpf)

    expect(isValidCpf).toBeTruthy()
})

test('CPF válido com mascara', () => {
    const cpf = `284.072.770-61`
    const isValidCpf = validateCpf(cpf)
    expect(isValidCpf).toBeTruthy()
})

test('CPF inválido com 12 números e sem mascara', () => {
    const cpf = `111111111111`
    const isValidCpf = validateCpf(cpf)

    expect(isValidCpf).toBeFalsy()
})

test('CPF inválido com letra no ultimo caracter', () => {
    const cpf = `1111111111a`
    const isValidCpf = (validateCpf(cpf))

    expect(isValidCpf).toBeFalsy()
})

test('Cpf inválido com letra no meio', () => {
    const cpf = `1111a111a11`
    const isValidCpf = (validateCpf(cpf))

    expect(isValidCpf).toBeFalsy()
})

test('Deve validar cpf nulo', () => {
    const cpf = null
    const isValidCpf = validateCpf(cpf)
    expect(isValidCpf).toBeFalsy()
})

test('Ultimo digito do cpf é 0', () => {
    const cpf = `11111111100`
    const isValidCpf = validateCpf(cpf)
    expect(isValidCpf).toBeFalsy()
})