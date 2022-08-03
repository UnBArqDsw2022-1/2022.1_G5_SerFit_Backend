'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('exercise_category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
      },
      thumbnailUrl: {
        type: Sequelize.STRING(2048),
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('exercise', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
      },
      description: {
        type: Sequelize.STRING(2048),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      thumbnailUrl: {
        type: Sequelize.STRING(2048),
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      videoUrl: {
        type: Sequelize.STRING(2048),
        allowNull: true,
        validate: {
            notEmpty: true
        }
      },
      gifUrl: {
        type: Sequelize.STRING(2048),
        allowNull: true,
        validate: {
            notEmpty: true
        }
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'exercise_category',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('exercise');
    await queryInterface.dropTable('exercise_category');
  }
};
