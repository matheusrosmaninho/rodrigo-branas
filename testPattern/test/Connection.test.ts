import Connection from "../src/Connection"

test('Deve retornar dados do banco', async () => {
    const connection = new Connection()
    const items = await connection.query("select * from public.item", [])
    expect(items).toHaveLength(3)
})