'use strict';

const AccountType = require('../../utils/AccountType');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
              len: [8, 150]
          }
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
              len: [2, 50],
              notEmpty: true
          }
      },
      accountType: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[AccountType.personal, AccountType.client]]
      }
      },
      age: {
          type: Sequelize.INTEGER,
          allowNull: true
      },
      about: {
          type: Sequelize.STRING,
          allowNull: true
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};