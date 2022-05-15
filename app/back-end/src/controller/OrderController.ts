import { Request, Response } from 'express';
import OrderService from '../service/OrderService';

export default class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  public getAll = async (req: Request, res: Response) => {
    const matches = await this.orderService.getAll();
    if (matches) return res.status(200).json(matches);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
}
