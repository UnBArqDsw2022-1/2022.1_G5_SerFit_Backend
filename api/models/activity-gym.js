module.exports = (sequelize, DataTypes) => {
    const activityGym = sequelize.define('activity_gym', {
        days: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
          },
          times: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
          },
          teacher: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
          },
          activityId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
              model: 'activity',
              key: 'id'
            }
          },
          gymId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
              model: 'gym',
              key: 'id'
            }
          }
    }, {
        paranoid: true,
        freezeTableName: true
    });
    return activityGym;
  }; 