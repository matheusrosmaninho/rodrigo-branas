import GetItems from "../src/GetItems"
import ItemsRepositoryDatabase from "../src/ItemsRepositoryDatabase"
import ItemsRepositoryMemory from "../src/ItemsRepositoryMemory"

test('Deve obter os itens', async () => {
    const itemsRepository = new ItemsRepositoryDatabase()
    const getItems = new GetItems(itemsRepository)
    const items = await getItems.execute()

    expect(items).toHaveLength(3)
    expect(items[0].description).toBe('Guitarra')
    expect(items[0].price).toBe(1000)
})

test('Deve obter os itens com um fake repository', async () => {
    const itemsRepository = new ItemsRepositoryMemory()
    const getItems = new GetItems(itemsRepository)
    const items = await getItems.execute()

    expect(items).toHaveLength(3)
    expect(items[0].description).toBe('Guitarra')
    expect(items[0].price).toBe(1000)
})