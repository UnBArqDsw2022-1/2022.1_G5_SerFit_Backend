const userRoutes = require('./users');
const exerciseRoutes = require('./exercise');
const exerciseCategoriesRoutes = require('./exercise-category');

module.exports = function (app) {
  app.use('/api', [
    userRoutes,
    exerciseRoutes,
    exerciseCategoriesRoutes
  ])
};