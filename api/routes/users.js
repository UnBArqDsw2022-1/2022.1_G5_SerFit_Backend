const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const PATH = require('../utils/uriConfig/ServerPath').user;


/**
 * Padrão facade:
 *
 * Os métodos router.get e router.post
 * são facades para os método router.use,
 * simplificando as configurações para casos específicos
 * (de GET e POST).
 *
 */

router.get(`${PATH}`, UserController.all);
router.get(`${PATH}find/`, UserController.find.bind(UserController));
router.post(`${PATH}create/`, UserController.create);
router.put(`${PATH}update/:id/`, UserController.update.bind(UserController));

module.exports = router;