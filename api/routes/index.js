const accountRoutes = require('./users');

module.exports = function (app) {
  app.use('/api', [
    accountRoutes
  ])
};