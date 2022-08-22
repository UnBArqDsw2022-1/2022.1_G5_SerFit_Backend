'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('activity_gym', {
      days: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      times: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      teacher: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
      },
      activityId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: true
        },
      },
      gymId: {
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
    await queryInterface.dropTable('activity_gym');
  }
};
