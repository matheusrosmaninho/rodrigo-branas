import ItemsRepository from "./ItemsRepository";

export default class ItemsRepositoryMemory implements ItemsRepository {
    async getItems(): Promise<any> {
        return [
            {
                description: 'Guitarra',
                price: 1000
            },
            {
                description: 'Guitarra',
                price: 1000
            },
            {
                description: 'Guitarra',
                price: 1000
            }
        ]
    }

}