'use strict';

const activityFactory = require('./helper/activity-factory');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('activity_gym', [
      // Zumba - Smartfit
      activityFactory.createActivityGym("Terça e Quinta", "18h-20h", "Daniel Silveira", 1, 1),
      // Zumba - Bluefit
      activityFactory.createActivityGym("Segunda e Quarta", "16h-18h", "Gustavo Clemente", 1, 2),
      // Boxe - Evolve
      activityFactory.createActivityGym("Sábado", "09h-11h", "Gabriela Pinheiro", 2, 3),
      // Boxe - Unique
      activityFactory.createActivityGym("Quarta e Sexta", "14h-16h", "Amanda Silva", 2, 4),
      // Spinning - Smartfit
      activityFactory.createActivityGym("Segunda, Quarta e Sexta", "20h-22h", "Jorge Ruan", 3, 1),
      // Spinning - Evolve
      activityFactory.createActivityGym("Terça e Quinta", "18h-20h", "Sabrina Laís", 3, 3),
      // Funcional - Bluefit
      activityFactory.createActivityGym("Quarta e Sexta", "17h-18h", "Hugo Rocha", 4, 2),
      // Funcional - Unique
      activityFactory.createActivityGym("Sábado", "15h-16h", "Fernanda Pessoa", 4, 4),
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('activity_gym', null, {});
  }
};
