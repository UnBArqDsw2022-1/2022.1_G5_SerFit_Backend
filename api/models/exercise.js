module.exports = (sequelize, DataTypes) => {
  const exercise = sequelize.define('exercise', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      thumbnailUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      videoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
      },
      gifUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
      }
  }, {
    classMethods: {
        associate: function(models) {
            exercise.belongsTo(models.exercise_category, {
                foreignKey: {
                    name: 'id',
                    allowNull: false
                }
            })
        }
    },
    paranoid: true,
    freezeTableName: true,
  });
  return exercise;
};