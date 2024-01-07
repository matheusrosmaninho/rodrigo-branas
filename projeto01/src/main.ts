import ExpressAdapter from './ExpressAdapter'
import GetItens from './GetItens'
import ItemRepositoryDatabase from './ItemRepositoryDatabase'
import PgPromiseConnectionAdapter from './PgPromiseConnectionAdapter'

const http = new ExpressAdapter()

const connection = new PgPromiseConnectionAdapter()
const itemRepository = new ItemRepositoryDatabase(connection)

http.on('get', '/items', async (params: any, body: any) => {

    const getItens = new GetItens(itemRepository)
    const output = await getItens.execute()
    return output
} )

http.listen(3000)