'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cnpjs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false
      },
    
      companyType: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cnpjs');
  }
};
