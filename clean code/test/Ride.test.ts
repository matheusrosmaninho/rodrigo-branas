import Ride from "../src/Ride"

let ride: Ride

beforeEach(() => {
    ride = new Ride()
})

test('Deve calcular valor da corrida em horário normal', () => {
    ride.addSegment(10, new Date('2021-03-01T10:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(21)
})

test('Deve calcular valor da corrida em horário noturno', () => {
    ride.addSegment(10, new Date('2021-03-01T23:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(39)
})

test('Deve calcular valor da corrida no domingo', () => {
    ride.addSegment(10, new Date('2021-03-07T10:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(29)
})

test('Deve calcular valor da corrida no domingo em horário noturno', () => {
    ride.addSegment(10, new Date('2021-03-07T23:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(50)
})

test('Deve calcular valor da corrida minima', () => {
    ride.addSegment(3, new Date('2021-03-07T10:00:00'))
    const fare = ride.finish()
    expect(fare).toBe(10)
})

test('Deve retornar -1 com distancia inválida', () => {
    expect(() => ride.addSegment(-3, new Date('2021-03-07T10:00:00'))).toThrow("Invalid distance")
})

 test('Deve retornar -2 se data inválida', () => {
     expect(() => ride.addSegment(10, new Date('abcd')) ).toThrow("Invalid date")
 })

 test('Deve calcular valor da corrida em multiplos horários', () => {
     ride.addSegment(10, new Date('2021-03-01T21:00:00'))
     ride.addSegment(10, new Date('2021-03-01T22:00:00'))
     
     const fare = ride.finish()
     expect(fare).toBe(60)
 })