import ItemRepositoryDatabase from "../src/ItemRepositoryDatabase"
import PgPromiseConnectionAdapter from "../src/PgPromiseConnectionAdapter"

test('Deve retornar itens do banco de dados', async () => {
    const connection = new PgPromiseConnectionAdapter()
    const itemRepository = new ItemRepositoryDatabase(connection)
    const items = await itemRepository.list()
    expect(items).toHaveLength(4)
})