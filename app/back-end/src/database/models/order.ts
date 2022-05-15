import { DataTypes, Model } from 'sequelize';
import db from '.';
import Buyer from './buyer';
import Cnpj from './cnpj';
import Provider from './provider';
import User from './user';

class Order extends Model {
  public id!: number;

  public orderNfId!: string;

  public orderNumber!: string;

  public orderPath!: string;

  public orderFileName!: string;

  public orderOriginalName!: string;

  public emissionDate!: string;

  public pdfFile!: string;

  public emitedTo!: string;

  public nNf!: string;

  public CTE!: string;

  public value!: string;

  public createdAt!: Date;

  public updatedAt!: Date;

  public cnpjId!: number;

  public userId!: number;

  public buyerId!: number;

  public providerId!: number;

  public orderStatusBuyer!: string;

  public orderStatusProvider!: string;

  public deliveryReceipt!: string;

  public cargoPackingList!: string;

  public deliveryCtrc!: string;
}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false
  },

  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },

  orderPath: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  orderFileName: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  orderOriginalName: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  emissionDate: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  pdfFile: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  emitedTo: {
    type: DataTypes.STRING,
    allowNull: false
  },

  nNf: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  CTE: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  value: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },

  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },

  cnpjId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'cnpjs',
      key: 'id',
    },
  },

  userId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'users',
      key: 'id',
    },
  },

  buyerId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'buyers',
      key: 'id',
    },
  },

  providerId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'providers',
      key: 'id',
    },
  },

  orderStatusBuyer: {
    type: DataTypes.STRING,
    defaultValue: '0'
  },

  orderStatusProvider: {
    type: DataTypes.STRING,
    defaultValue: '0'
  },

  deliveryReceipt: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  cargoPackingList: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  deliveryCtrc: {
    type: DataTypes.STRING,
    defaultValue: null
  },
}, {
  sequelize: db,
  modelName: 'orders',
});

Order.belongsTo(Cnpj);
Order.belongsTo(Buyer);
Order.belongsTo(Provider);
Order.belongsTo(User);

export default Order;
