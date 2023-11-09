import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrdersService";

class ListOrdersController {
  async handle(req: Request, res: Response) {
    const listOrderService = new ListOrderService();

    const order = await listOrderService.execute();

    return res.json(order);
  }
}

export { ListOrdersController };
