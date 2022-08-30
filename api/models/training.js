module.exports = (sequelize, DataTypes) => {
    const store = sequelize.define('training', {
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        },
        exercises: {
            allowNull: false,
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        }
    }, {
      freezeTableName: true
    });
    return store;
  };