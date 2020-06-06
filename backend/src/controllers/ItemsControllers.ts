import {Request, Response} from 'express';
import knex from '../database/connections';

class ItemsControllers{
    async index(request:Request, response:Response){
        const items = await knex('items').select('*');

        const serializedItems = items.map(item =>{
            return {
                title:item.title,
                item_url:`http://localhost:3333/uploads/${item.image}`,
            };
        })
        return response.json(serializedItems);
    }
}
export default ItemsControllers;