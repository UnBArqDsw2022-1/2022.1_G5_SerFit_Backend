const AccountType = require('../utils/AccountType');
const fs = require('fs');
const INTERESTS = require('../utils/Interests');
const path = require('path');
const defaultThumb = fs.readFileSync(__dirname + '/../public/assets/png-clipart-fitness-centre-exercise-computer-icons-physical-fitness-icon-fitness-physical-fitness-text-thumbnail.png');

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
          isIn: [INTERESTS],
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
      thumbnail : {
        type: DataTypes.BLOB,
        defaultValue: defaultThumb, 
      }
    },
    {
      freezeTableName: true,
    }
  );
};
