import { OrderService } from "../service/order.service";
import type { Req, Res } from "../types/types";

export const orderRoute = async (req: Req, res: Res) => {
    if(
        req.method === "GET"
    ){
        const orders= await OrderService

    }
};
