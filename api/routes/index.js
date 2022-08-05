const accountRoutes = require('./users');
const activityRoutes = require('./activity');
const gymRoutes = require('./gym');

module.exports = function (app) {
  app.use('/api', [
    accountRoutes,
    activityRoutes,
    gymRoutes
  ])
};