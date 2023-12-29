import { calculateRide } from "../src/calc"

test('Deve calcular valor da corrida em horário normal', () => {
    const fare = calculateRide([{distance: 10, date: new Date('2021-03-01T10:00:00')}])
    expect(fare).toBe(21)
})

test('Deve calcular valor da corrida em horário noturno', () => {
    const fare = calculateRide([{distance: 10, date: new Date('2021-03-01T23:00:00')}])
    expect(fare).toBe(39)
})

test('Deve calcular valor da corrida no domingo', () => {
    const fare = calculateRide([{distance: 10, date: new Date('2021-03-07T10:00:00')}])
    expect(fare).toBe(29)
})

test('Deve calcular valor da corrida no domingo em horário noturno', () => {
    const fare = calculateRide([{distance: 10, date: new Date('2021-03-07T23:00:00')}])
    expect(fare).toBe(50)
})

test('Deve calcular valor da corrida minima', () => {
    const fare = calculateRide([{distance: 3, date: new Date('2021-03-07T10:00:00')}])
    expect(fare).toBe(10)
})

test('Deve retornar -1 com distancia inválida', () => {
    expect(() => calculateRide([{distance: -3, date: new Date('2021-03-07T10:00:00')}])).toThrow("Invalid distance")
})

test('Deve retornar -2 se data inválida', () => {
    expect(() =>  calculateRide([{distance: 10, date: new Date('abcd')}])).toThrow("Invalid date")
})

test('Deve calcular valor da corrida em multiplos horários', () => {
    const fare = calculateRide([
        {distance: 10, date: new Date('2021-03-01T21:00:00')},
        {distance: 10, date: new Date('2021-03-01T22:00:00')}
    ])
    expect(fare).toBe(60)
})