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
          as: 'cnpj',
          attributes: ['cnpj'],
        },
        {
          model: UserModel,
          as: 'userName',
          attributes: ['name'],
        },
        {
          model: BuyerModel,
          as: 'buyerName',
          attributes: ['name'],
        },
        {
          model: ProviderModel,
          as: 'providerName',
          attributes: ['name'],
        },
      ],
    });
    return orders as IOrderWithData[];
  };
};

