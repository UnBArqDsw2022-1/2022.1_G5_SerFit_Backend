const db = require('../models/index');
const jwt = require('jsonwebtoken');

class UserController {
    constructor() { }

    async create(req, res) {
        const { password, email, name, accountType } = req.body;
        const user = { password, email, name, accountType };
        try {
            const account = await db.user.create(user);
            const id = account.id;
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 3000
            });
            return res.status(201).json({ auth: true, token: token });
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }
}

module.exports = new UserController();