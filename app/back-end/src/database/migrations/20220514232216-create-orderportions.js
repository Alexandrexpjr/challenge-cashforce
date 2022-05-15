'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    
      nDup: {
        type: Sequelize.STRING,
        allowNull: false
      },
    
      dVenc: {
        type: Sequelize.STRING,
        allowNull: false
      },
    
      vDup: {
        type: Sequelize.STRING,
        allowNull: false
      },
    
      availableToMarket: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
    
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    
      orderId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'orders',
          key: 'id',
        },
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orderportions');
  }
};
