import { Router } from 'express';
import OrderController from '../controller/OrderController';

const orderRoute = Router();
const orderController = new OrderController();

orderRoute.get('/', orderController.getAll);

export default orderRoute;
