'use strict';
const INTERESTS = require('../../utils/Interests');
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction((t) =>
      Promise.all([
        queryInterface.addColumn(
          'user',
          'mainInterest',
          {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
              isIn: INTERESTS,
            },
          },
          { transaction: t }
        ),
      ])
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction((t) =>
      queryInterface.removeColumn('user', 'mainInterest', { transaction: t })
    );
  },
};
