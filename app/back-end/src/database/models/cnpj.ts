import { DataTypes, Model } from 'sequelize';
import db from '.';

class Cnpj extends Model {
  public id!: number;

  public cnpj!: string;

  public companyType!: string;

  public createdAt!: Date;

  public updatedAt!: Date;
}

Cnpj.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  cnpj: {
    type: DataTypes.STRING,
    allowNull: false
  },

  companyType: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'cnpjs',
});

export default Cnpj;
