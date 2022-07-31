const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const setRoutes = require('./api/routes');
const authMiddleware = require('./middlewares/auth-middleware');

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(authMiddleware);
    }

    routes() {
        setRoutes(this.app);
    }
}

module.exports = new App().app;