'use strict';
const fs = require('fs');
const path = require('path');

const defaultThumb = fs.readFileSync(__dirname + '/../../public/assets/png-clipart-fitness-centre-exercise-computer-icons-physical-fitness-icon-fitness-physical-fitness-text-thumbnail.png');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction(transact => {
      return Promise.all([
        queryInterface.addColumn(
          'user',
          'thumbnail',
          {
            type: Sequelize.BLOB,
            defaultValue: defaultThumb, 
          },
          { transaction: transact }
          )
      ]); 
    });
  },

  async down (queryInterface, _Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction(transact => {
      return queryInterface.removeColumn(
        'user',
        'thumbnail',
        { transaction: transact}
      );
    }); 
  }
};
