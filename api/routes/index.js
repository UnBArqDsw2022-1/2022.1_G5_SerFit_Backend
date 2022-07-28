const accountRoutes = require('./users');
const loginRoutes = require('./login');

module.exports = function (app) {
  app.use('/api', [
    accountRoutes,
    loginRoutes
  ])
};