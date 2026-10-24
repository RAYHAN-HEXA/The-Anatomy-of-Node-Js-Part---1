import path from "node:path";
import type { order } from "../types/types";
import fs from "fs/promises"
import strict from "node:assert/strict";
const DB_PATH = path.join(process.cwd(), "src", "db", "db.json");
console.log(DB_PATH);
class orderService {
    //readData , write data 
     async   readData():Promise<order[]>{
        try {
        const data = await fs.readFile(DB_PATH,"utf-8");
        return JSON.parse(data)
        } catch (error) {
            return [];
        }

    }
    private async writeData(data : order[]){
        await fs.writeFile(DB_PATH,JSON.stringify(data,null,2))
    }
    //getByID
async getbyId(id: string){
const data = await this.readData();

return data.find(order => order.id === id )

}
    //GET 
    async get(){
        const data = await this.readData();
        return data;

    }
    //update
    async update (id : string,updates : Omit<order,"id">):Promise<order>|null{
        const data = await this.readData()
        const i = data.findIndex(order => order.id === id )
        if(i===-1) return null;
        data[i] = {...data[i],...updates} as order;

        await this.writeData(data);
        return data[i];

//delet 
async delete(id : string ){
    const  data = await  this.readData();
    const i = data.findIndex(order => order.id === id)
    if(i=== -1)return  false
    data.splice(i,1);

    await this.writeData(data);
    return true;

}
    }
    //create
    async create (order : Omit<order,"id">){
        const data = await this.readData();
  const newOrder = {
    ...order,
    id : String(Math.random()*100)
  }
  data.push(newOrder);
  await this.writeData(data)
    }
    
}
 
export const OrderService = new orderService();
 
await OrderService.create({
    customer : "Rayhan",
    food : "pizzaa",
    price : 1111,
    quantity : 44
})
console.log(await OrderService.getbyId("2"))
