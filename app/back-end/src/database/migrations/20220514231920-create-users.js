'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      phoneNumber: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      
      mobile: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      
      departament: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      
      verificationCode: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      
      emailChecked: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      
      cashforceAdm: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};