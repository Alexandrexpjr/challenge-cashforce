'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    
      tax: {
        type: Sequelize.STRING,
        allowNull: false
      },
    
      tariff: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    
      adValorem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    
      float: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    
      iof: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
    
      paymentStatusSponsor: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
    
      paymentStatusProvider: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
      },
    
      sponsorId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'sponsors',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('offers');
  }
};
