'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('store', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
      },
      description: {
        type: Sequelize.STRING(2048),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
      },
      thumbnailUrl: {
        type: Sequelize.STRING(2048),
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      websiteUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
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
    await queryInterface.dropTable('store');
  }
};
