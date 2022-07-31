const accountRoutes = require('./user/user.routes');
const loginRoutes = require('./login/login.routes');
const placeholderRoutes = require('./placeholder/placeholder.routes');

module.exports = function (app) {
  app.use('/api', [
    accountRoutes,
    loginRoutes,
    placeholderRoutes
  ])
};