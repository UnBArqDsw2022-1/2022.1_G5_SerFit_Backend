const dotenv = require('dotenv');
const environment = process.env.ENVIRONMENT.toLowerCase();
const envPath = __dirname + `/../.env.${environment}`;

dotenv.config({ path: envPath });

const db = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAMES,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: true
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAMES,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: true
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAMES,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }
};

module.exports = db;