const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const setRoutes = require('./routes/index');
const authMiddleware = require('./middlewares/auth-middleware');
const cors = require('cors');
const morgan = require('morgan');

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
        this.app.use(cors());
        this.app.use(morgan('tiny'));
        this.app.use(authMiddleware);
    }

    routes() {
        setRoutes(this.app);
    }
}

module.exports = new App().app;