module.exports = (sequelize, DataTypes) => {
    const activity = sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
          },
          description: {
            type: DataTypes.STRING(2048),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
          },
          thumbnailUrl: {
            type: DataTypes.STRING(2048),
            allowNull: false,
            validate: {
                notEmpty: true
            }
          },
          videoUrl: {
            type: DataTypes.STRING(2048),
            allowNull: true,
            validate: {
                notEmpty: true
            }
          },
          gifUrl: {
            type: DataTypes.STRING(2048),
            allowNull: true,
            validate: {
                notEmpty: true
            }
          }
    }, {
      freezeTableName: true,
      paranoid: true
    });
    activity.associate = (models) => {
      activity.belongsToMany(models.gym, {
        through: models.activity_gym,
        foreignKey: 'activityId'
      });
    };
    return activity;
  }; 