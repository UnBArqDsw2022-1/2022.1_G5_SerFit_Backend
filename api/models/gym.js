module.exports = (sequelize, DataTypes) => {
    const gym = sequelize.define('gym', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
          },
          thumbnailUrl: {
            type: DataTypes.STRING(2048),
            allowNull: false,
            validate: {
                notEmpty: true
            }
          }
    }, {
        freezeTableName: true,
        paranoid: true
      });
    gym.associate = (models) => {
        gym.belongsToMany(models.activity, {
          through: models.activity_gym,
          foreignKey: 'gymId'
        });
      };
    return gym;
  }; 