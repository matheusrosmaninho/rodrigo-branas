import GetItems from "../src/GetItems"
import ItemsRepositoryDatabase from "../src/ItemsRepositoryDatabase"
import ItemsRepositoryMemory from "../src/ItemsRepositoryMemory"
import sinon from 'sinon'

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

test('Deve obter os itens com um stub', async () => {
    const itemsRepository = new ItemsRepositoryDatabase()
    sinon.stub(itemsRepository, 'getItems').returns(Promise.resolve([{ description: 'Bola', price: 100 }]))
    const getItems = new GetItems(itemsRepository)
    const items = await getItems.execute()

    expect(items).toHaveLength(1)
    expect(items[0].description).toBe('Bola')
    expect(items[0].price).toBe(100)
    sinon.restore()
})

test('Deve obter os itens com um spy', async () => {
    const itemsRepository = new ItemsRepositoryDatabase()
    const spy = sinon.spy(itemsRepository, 'getItems')
    const getItems = new GetItems(itemsRepository)
    const items = await getItems.execute()

    expect(items).toHaveLength(3)
    sinon.assert.calledOnce(spy)

    sinon.restore()
})

test('Deve obter os itens com um mock', async () => {
    const itemsRepository = new ItemsRepositoryDatabase()
    const getItems = new GetItems(itemsRepository)
    const mock = sinon.mock(getItems)
    mock.expects('execute').returns(Promise.resolve([{ description: 'Bola', price: 100 }]))

    await getItems.execute()
    mock.verify()
    sinon.restore()
})