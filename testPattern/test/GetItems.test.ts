import GetItems from "../src/GetItems"

test('Deve obter os itens', async () => {
    const getItems = new GetItems()
    const items = await getItems.execute()

    expect(items).toHaveLength(3)
    expect(items[0].description).toBe('Guitarra')
    expect(items[0].price).toBe(1000)
})