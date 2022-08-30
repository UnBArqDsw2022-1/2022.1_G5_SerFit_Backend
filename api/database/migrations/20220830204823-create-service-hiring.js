'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('service_hiring', {
      clientId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: true
        },
      },
      personalId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: true
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('service_hiring');
  }
};
