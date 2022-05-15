'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('providers', [{
      name: 'CEDENTE 002',
      tradingName: 'CEDENTE 002 LTDA',
      createdAt: new Date('2020-10-29 21:22:21'),
      updatedAt: new Date('2020-10-29 21:22:22'),
      cnpjId: 2,
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('providers', null, {});
  }
};