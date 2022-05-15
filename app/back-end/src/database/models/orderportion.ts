import { DataTypes, Model, TinyIntegerDataType } from 'sequelize';
import db from '.';
import Order from './order';

class Orderportion extends Model {
  public id!: number;

  public nDup!: string;

  public dVenc!: string;

  public vDup!: string;

  public availableToMarket!: TinyIntegerDataType;
  
  public createdAt!: Date;

  public updatedAt!: Date;

  public orderId!: number;
}

Orderportion.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  nDup: {
    type: DataTypes.STRING,
    allowNull: false
  },

  dVenc: {
    type: DataTypes.STRING,
    allowNull: false
  },

  vDup: {
    type: DataTypes.STRING,
    allowNull: false
  },

  availableToMarket: {
    type: DataTypes.TINYINT,
    defaultValue: 1
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
  }
}, {
  sequelize: db,
  modelName: 'orderportions',
});

Orderportion.belongsTo(Order);

export default Orderportion;
