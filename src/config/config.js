var dotenv = require('dotenv');

var environment = process.env.ENVIRONMENT.toLowerCase();
let envPath = __dirname + `/../.env.${environment}`;

dotenv.config({ path: envPath });

var config = {
  port: process.env.PORT,
};

module.exports = config;
