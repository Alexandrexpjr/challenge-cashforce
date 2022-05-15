import { DataTypes, Model, TinyIntegerDataType } from 'sequelize';
import db from '.';

class User extends Model {
  public id!: number;

  public name!: string;

  public email!: string;

  public phoneNumber!: string;

  public mobile!: string;

  public departament!: string;

  public verificationCode!: string;

  public emailChecked!: TinyIntegerDataType;

  public createdAt!: string;

  public updatedAt!: string;

  public cashforceAdm!: TinyIntegerDataType;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneNumber: {
    type: DataTypes.STRING,
    defaultValue: null,
  },

  mobile: {
    type: DataTypes.STRING,
    defaultValue: null,
  },

  departament: {
    type: DataTypes.STRING,
    defaultValue: null,
  },

  verificationCode: {
    type: DataTypes.STRING,
    defaultValue: null,
  },

  emailChecked: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  cashforceAdm: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
}, {
  sequelize: db,
  modelName: 'users',
});

export default User;
