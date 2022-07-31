const AccountType = require('../../utils/AccountType');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
              len: [8, 150]
          }
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [2, 50],
              notEmpty: true
          }
      },
      accountType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[AccountType.personal, AccountType.client]]
      }
      },
      age: {
          type: DataTypes.INTEGER,
          allowNull: true
      },
      about: {
          type: DataTypes.STRING,
          allowNull: true
      }
  }, {
    freezeTableName: true,
  });
  return user;
};