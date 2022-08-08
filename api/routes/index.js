
const userRoutes = require('./users');
const exerciseRoutes = require('./exercise');
const exerciseCategoriesRoutes = require('./exercise-category');
const accountRoutes = require('./users');
const storeRoutes = require('./store');

module.exports = function (app) {
  app.use('/api', [
    accountRoutes,
    storeRoutes,
    userRoutes,
    exerciseRoutes,
    exerciseCategoriesRoutes
  ])
};