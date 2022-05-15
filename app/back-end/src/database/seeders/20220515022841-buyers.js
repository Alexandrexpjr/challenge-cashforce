'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('buyers', [{
      name: 'SACADO 001',
      tradingName: 'SACADO 001 LTDA',
      cashforceTax: '0',
      createdAt: new Date('2020-10-29 21:20:33'),
      updatedAt: new Date('2020-10-29 21:20:34'),
      cnpjId: 1,
      confirm: 1
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('buyers', null, {});
  }
};