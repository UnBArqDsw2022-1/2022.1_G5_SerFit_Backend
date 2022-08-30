module.exports = (sequelize, DataTypes) => {
    const activityGym = sequelize.define('service_hiring', {
        clientId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
                model: 'user',
                key: 'id'
            },
          },
          personalId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
                model: 'user',
                key: 'id'
            },
          }
    }, {
        paranoid: true,
        freezeTableName: true
    });
    return activityGym;
  }; 