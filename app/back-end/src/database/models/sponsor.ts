import { DataTypes, Model } from 'sequelize';
import db from '.';
import Cnpj from './cnpj';

class Sponsor extends Model {
  public id!: number;

  public name!: string;

  public tradingName!: string;

  public cashforceTax!: string;

  public responsibleName!: string;

  public responsibleEmail!: string;

  public responsiblePosition!: string;

  public responsiblePhone!: string;

  public responsibleMobile!: string;

  public website!: string;

  public postalCode!: string;

  public address!: string;

  public number!: string;

  public complement!: string;

  public neighborhood!: string;

  public city!: string;

  public state!: string;

  public bank!: string;

  public bankAgency!: string;

  public account!: string;

  public phoneNumber!: string;

  public situation!: string;

  public situationDate!: string;

  public createdAt!: string;

  public updatedAt!: string;

  public cnpjId!: number;

  public email!: string;
}

Sponsor.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  tradingName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cashforceTax: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  responsibleName: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  responsibleEmail: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  responsiblePosition: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  responsiblePhone: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  responsibleMobile: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  website: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  postalCode: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  address: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  number: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  complement: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  neighborhood: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  city: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  state: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  bank: {
    type:DataTypes.STRING,
    defaultValue: null
  },

  bankAgency: {
    type:DataTypes.STRING,
    defaultValue: null
  },

  account: {
    type:DataTypes.STRING,
    defaultValue: null
  },

  phoneNumber: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  situation: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  situationDate: {
    type: DataTypes.STRING,
    defaultValue: null
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
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

  confirm: {
    type: DataTypes.TINYINT,
    defaultValue: 1
  },

  email: {
    type: DataTypes.STRING,
    defaultValue: null
  },
}, {
  sequelize: db,
  modelName: 'sponsors',
});

Sponsor.belongsTo(Cnpj)

export default Sponsor;

