import ExpressAdapter from './infra/http/ExpressAdapter'
import GetItens from './application/GetItens'
import ItemRepositoryDatabase from './infra/repository/database/ItemRepositoryDatabase'
import PgPromiseConnectionAdapter from './infra/database/PgPromiseConnectionAdapter'

const http = new ExpressAdapter()

const connection = new PgPromiseConnectionAdapter()
const itemRepository = new ItemRepositoryDatabase(connection)

http.on('get', '/items', async (params: any, body: any) => {

    const getItens = new GetItens(itemRepository)
    const output = await getItens.execute()
    return output
} )

http.listen(3000)