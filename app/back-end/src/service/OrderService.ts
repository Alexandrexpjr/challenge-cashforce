import BuyerModel from '../database/models/buyer';
import CnpjModel from '../database/models/cnpj';
import OrderModel from '../database/models/order';
import ProviderModel from '../database/models/provider';
import UserModel from '../database/models/user';
import { IOrderWithData } from '../interface/IOrder';

export default class OrderService {
  public getAll = async ():Promise<IOrderWithData[]> => {
    const orders = await OrderModel.findAll({
      include: [
        {
          model: CnpjModel,
          attributes: ['cnpj'],
        },
        {
          model: UserModel,
          attributes: ['name'],
        },
        {
          model: BuyerModel,
          attributes: ['name'],
        },
        {
          model: ProviderModel,
          attributes: ['name'],
        },
      ],
    });
    return orders as IOrderWithData[];
  };
};

