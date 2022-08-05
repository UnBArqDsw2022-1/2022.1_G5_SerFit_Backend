const accountRoutes = require('./users');
const storeRoutes = require('./store');

module.exports = function (app) {
  app.use('/api', [
    accountRoutes,
    storeRoutes
  ])
};