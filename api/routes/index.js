const accountRoutes = require('./users');
const activityRoutes = require('./activity');
const exerciseCategoriesRoutes = require('./exercise-category');
const exerciseRoutes = require('./exercise');
const gymRoutes = require('./gym');
const storeRoutes = require('./store');
const userRoutes = require('./users');
const loginRoutes = require('./login');

module.exports = function (app) {
  app.use('/api', [
    accountRoutes,
    activityRoutes,
    exerciseCategoriesRoutes,
    exerciseRoutes,
    gymRoutes,
    storeRoutes,
    userRoutes,
    loginRoutes
  ])
};