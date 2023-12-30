import { validate } from "../../src/example02/beforeCpf"

test('CPF invalido com menos de 11 digitos', () => {
    const isValidCpf = validate('1111')
    expect(isValidCpf).toBeFalsy()
})

test('CPF inválido com 11 digitos e sem mascara', () => {
    const isValidCpf = validate('11111111111')
    expect(isValidCpf).toBeFalsy()
})

test('CPF inválido com 11 digitos e com mascara', () => {
    const isValidCpf = validate('111.111.111-11')
    expect(isValidCpf).toBeFalsy()
})

test('CPF válido sem mascara', () => {
    const cpf = `28407277061`
    const isValidCpf = validate(cpf)

    expect(isValidCpf).toBeTruthy()
})

test('CPF válido com mascara', () => {
    const cpf = `284.072.770-61`
    const isValidCpf = validate(cpf)
    expect(isValidCpf).toBeTruthy()
})

test('CPF inválido com 12 números e sem mascara', () => {
    const cpf = `111111111111`
    const isValidCpf = validate(cpf)

    expect(isValidCpf).toBeFalsy()
})

test('CPF inválido com letra no ultimo caracter', () => {
    const cpf = `1111111111a`
    const isValidCpf = (validate(cpf))

    expect(isValidCpf).toBeFalsy()
})

test('Cpf inválido com letra no meio', () => {
    const cpf = `1111a111a11`
    const isValidCpf = (validate(cpf))

    expect(isValidCpf).toBeFalsy()
})