var dotenv = require('dotenv');

var enviroment = process.env.ENVIROMENT.toLowerCase();
let envPath = __dirname + `/../.env.${enviroment}`;
console.log(envPath);

dotenv.config({path: envPath});

var config = {
	port: process.env.PORT,
};

console.log(config.port);

module.exports = config;


