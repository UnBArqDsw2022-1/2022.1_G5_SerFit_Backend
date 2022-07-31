var dotenv = require('dotenv');

var environment = process.env.NODE_ENV;
let envPath = __dirname + `/../.env.${environment}`;
dotenv.config({ path: envPath });

const config = {
  port: process.env.PORT,
};

module.exports = config;
