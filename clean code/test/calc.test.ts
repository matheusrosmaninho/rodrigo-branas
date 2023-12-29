import { calculateRide } from "../src/calc"

test('Deve calcular valor da corrida em horário normal', () => {
    const result = calculateRide([{dist: 10, ds: new Date('2021-03-01T10:00:00')}])
    expect(result).toBe(21)
})

test('Deve calcular valor da corrida em horário noturno', () => {
    const result = calculateRide([{dist: 10, ds: new Date('2021-03-01T23:00:00')}])
    expect(result).toBe(39)
})

test('Deve calcular valor da corrida no domingo', () => {
    const result = calculateRide([{dist: 10, ds: new Date('2021-03-07T10:00:00')}])
    expect(result).toBe(29)
})

test('Deve calcular valor da corrida no domingo em horário noturno', () => {
    const result = calculateRide([{dist: 10, ds: new Date('2021-03-07T23:00:00')}])
    expect(result).toBe(50)
})

test('Deve calcular valor da corrida minima', () => {
    const result = calculateRide([{dist: 3, ds: new Date('2021-03-07T10:00:00')}])
    expect(result).toBe(10)
})

test('Deve retornar -1 com distancia inválida', () => {
    const result = calculateRide([{dist: -3, ds: new Date('2021-03-07T10:00:00')}])
    expect(result).toBe(-1)
})

test('Deve retornar -2 se data inválida', () => {
    const result = calculateRide([{dist: 10, ds: new Date('abcd')}])
    expect(result).toBe(-2)
})