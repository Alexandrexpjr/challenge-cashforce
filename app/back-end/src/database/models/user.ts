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
  // `id` int(11) NOT NULL,
  // `name` varchar(255) NOT NULL,
  // `email` varchar(255) NOT NULL,
  // `phoneNumber` varchar(255) DEFAULT NULL,
  // `mobile` varchar(255) DEFAULT NULL,
  // `departament` varchar(255) DEFAULT NULL,
  // `verificationCode` varchar(255) DEFAULT NULL,
  // `emailChecked` tinyint(1) DEFAULT 0,
  // `createdAt` datetime NOT NULL,
  // `updatedAt` datetime NOT NULL,
  // `cashforceAdm` tinyint(1) DEFAULT 0
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
  underscored: true,
  sequelize: db,
  modelName: 'users',
});

export default User;
