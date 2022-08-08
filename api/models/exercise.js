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
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'exercise_category',
          key: 'id'
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