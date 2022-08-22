module.exports = (sequelize, DataTypes) => {
    const store = sequelize.define('store', {
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
          },
          websiteUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
          }
    }, {
      freezeTableName: true
    });
    return store;
  };