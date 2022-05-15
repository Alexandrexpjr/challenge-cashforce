import { DataTypes, Model, TinyIntegerDataType } from 'sequelize';
import db from '.';
import Order from './order';
import Sponsor from './sponsor';

class Offer extends Model {
  public id!: number;

  public tax!: string;

  public tariff!: string;

  public adValorem!: string;

  public float!: string;

  public iof!: string;

  public expiresIn!: Date;

  public paymentStatusSponsor!: TinyIntegerDataType;

  public paymentStatusProvider!: TinyIntegerDataType;

  public createdAt!: Date;
  
  public updatedAt!: Date;

  public orderId!: number;

  public sponsorId!: number;
}

Offer.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  tax: {
    type: DataTypes.STRING,
    allowNull: false
  },

  tariff: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  adValorem: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  float: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  iof: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  expiresIn: {
    type: DataTypes.DATE,
    allowNull: false
  },

  paymentStatusSponsor: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },

  paymentStatusProvider: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  orderId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'orders',
      key: 'id',
    },
  },

  sponsorId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    references: {
      model: 'sponsors',
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'offers',
});

Offer.belongsTo(Order);
Offer.belongsTo(Sponsor);


export default Offer;
