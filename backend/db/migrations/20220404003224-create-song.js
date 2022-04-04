'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      artist: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING(25)
      },
      audioFile: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      songImg: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};
