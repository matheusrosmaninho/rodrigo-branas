import Connection from "./Connection";

export default class GetItems {
    connection: Connection

    constructor() {
        this.connection = new Connection()
    }

    async execute(): Promise<Output[]> {
        const items = await this.connection.query('select * from public.item order by id asc')
        const output: Output[] = []
        for (const item of items) {
            output.push({ description: item.description, price: parseFloat(item.price)} )
        }

        return await output
    }
}

type Output = {
    description: string,
    price: number
}