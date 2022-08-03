'use strict';

const exerciseFactory = require('./helper/exercise-factory');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('exercise_category', [
      exerciseFactory.createExerciseCategory("Peitoral", "https://miro.medium.com/max/1001/1*9OrxMWzC6ARoatL1rrufQg.jpeg"),
      exerciseFactory.createExerciseCategory("Costas", "https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2021/10/Back-Workout.jpg"),
      exerciseFactory.createExerciseCategory("Pernas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4JkCzoWw4nFFfZlWsKbvuUsX2nu9ucQzAw&usqp=CAU"),
      exerciseFactory.createExerciseCategory("Braços", "https://img.huffingtonpost.com/asset/57aa49241700002d00d1dc1b.jpeg?cache=zT3rBf8pSa&ops=1778_1000"),
      exerciseFactory.createExerciseCategory("Abdômen", "https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2010/05/Inside-the-Muscles-Best-Ab-Exercises.jpg")
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('exercise_category', null, {});
  }
};