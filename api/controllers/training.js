const db = require('../models/index');

class TrainingController {
    
    constructor() { }

    async create(req, res) {
        const { userId, exercises } = req.body;
        try {
            const training = { userId, exercises };
            const response = await db.training.create(training);
            return res.status(201).json(response);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
    }

    async delete(req, res) {
        const { id } = req.body;
        try {
            await db.training.destroy({ where: { id } });
            return res.status(200).json();
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
    }
}

module.exports = new TrainingController(); 