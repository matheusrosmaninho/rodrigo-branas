import Dimension from "../src/Dimension"
import GetItens from "../src/GetItens"
import Item from "../src/Item"
import ItemRepositoryMemory from "../src/ItemRepositoryMemory"

test('Deve buscar os itens', async () => {
    const itemRepository = new ItemRepositoryMemory()
    itemRepository.save(new Item(1, 'Guitarra', 1000, new Dimension(100, 30, 10), 3))
    itemRepository.save(new Item(2, 'Amplificador', 5000, new Dimension(50, 50, 50), 20))
    itemRepository.save(new Item(3, 'Cabo', 30, new Dimension(10, 10, 10), 1))
    const getItens = new GetItens(itemRepository)
    const output = await getItens.execute()
    expect(output).toHaveLength(3)
})