const AccountType = require('../utils/AccountType');
const INTERESTS = require('../utils/Interests');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [8, 150],
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 50],
          notEmpty: true,
        },
      },
      accountType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[AccountType.personal, AccountType.client]],
        },
      },
      mainInterest: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: INTERESTS,
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      about: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
