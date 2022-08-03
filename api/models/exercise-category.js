module.exports = (sequelize, DataTypes) => {
    const exerciseCategory = sequelize.define('exercise_category', {
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
        classMethods: {
            associate: function(models) {
                exerciseCategory.hasMany(models.exercise)
            }
        },
        paranoid: true,
        freezeTableName: true,
    });
    return exerciseCategory;
  };