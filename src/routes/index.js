const accountRoutes = require('../api/user/user.routes');
const loginRoutes = require('../api/login/login.routes');

module.exports = function (app) {
  app.use('/api', [
    accountRoutes,
    loginRoutes
  ])
};