'use strict';

const activityFactory = require('./helper/activity-factory');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('gym', [
      activityFactory.createGym("Smart Fit",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e1ixJbvP09-9nrCaWopi2zJotwGoy0p42WFzs6-POP5WtX_9dtnZ_7xo_ewsKZeZGIk&usqp=CAU"),
       activityFactory.createGym("Blue Fit",
       "https://static.wixstatic.com/media/9e90be_e79a6c0a33164133a2dd58dccdfb0e4d~mv2.jpg/v1/fill/w_1600,h_640,al_c,q_90/file.jpg"),
       activityFactory.createGym("Evolve",
       "https://www.academiaevolve.com.br/og-1200.png"),
       activityFactory.createGym("Unique",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZ4dnGLSwOvWXZ5VxbDJiUyKHmDlQO3HaQp0TqJlowKYcu8ymn4Ag2ZoCiPQsJ9bfQWg&usqp=CAU")
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gym', null, {});
  }
};
