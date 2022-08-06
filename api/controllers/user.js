const db = require('../models/index');
const jwt = require('jsonwebtoken');

class UserController {
    async create(req, res) {
        const { password, email, name, accountType } = req.body;
        const user = { password, email, name, accountType };
        try {
            const account = await db.user.create(user);
            const id = account.id;
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 30000
            });
            return res.status(201).json({ auth: true, token: token });
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
    }

    async all(_req, res) {
        return db.user.findAll()
            .then(users => res.status(200).json(users))
            .catch(err => res.status(400).json(err));
    }
}

module.exports = new UserController();