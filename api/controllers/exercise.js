const db = require('../models/index');

class ExerciseController {
    constructor() { }

    async get(req, res) {
        const { id } = req.params;
        try {
            const exercise = await db.exercise.findOne({ where: { id: id } });
            return res.status(200).json(exercise);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }

    async getAll(req, res) {
        try {
            const exercises = await db.exercise.findAll();
            return res.status(200).json(exercises);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }
}

module.exports = new ExerciseController();