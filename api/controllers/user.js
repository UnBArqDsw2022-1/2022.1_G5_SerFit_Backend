const db = require('../models/index');

class UserController {
    constructor() { }

    async create(req, res) {
        const { password, email, name, accountType } = req.body;
        const user = { password, email, name, accountType };
        try {
            const account = await db.user.create(user);
            return res.status(201).json({ account });
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }
}

module.exports = new UserController();