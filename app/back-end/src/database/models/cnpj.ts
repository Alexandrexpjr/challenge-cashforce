import { DataTypes, Model } from 'sequelize';
import db from '.';

class Cnpj extends Model {
  public id!: number;

  public cnpj!: string;

  public companyType!: string;

  public createdAt!: string;

  public updatedAt!: string;
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
  underscored: true,
  sequelize: db,
  modelName: 'cnpjs',
});

export default Cnpj;
