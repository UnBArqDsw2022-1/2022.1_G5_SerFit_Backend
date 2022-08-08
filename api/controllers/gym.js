const db = require('../models/index');

class GymController {
    constructor() { }

    async get(req, res) {
        const { id } = req.params;
        try {
            const gym = await db.gym.findOne({ where: { id: id }, include: db.activity });
            return res.status(200).json(gym);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }

    async getAll(req, res) {
        try {
            const gyms = await db.gym.findAll({ include: db.activity });
            return res.status(200).json(gyms);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }
}

module.exports = new GymController(); 