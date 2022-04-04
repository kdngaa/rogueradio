'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Comments', [
        {
          content: 'Got me in the feels.',
          userId: 1,
          songId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: 'Silk Sonic did it again!',
          userId: 1,
          songId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
