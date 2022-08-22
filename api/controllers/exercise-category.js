const db = require('../models/index');

class ExerciseCategoryController {
    constructor() { }

    async get(req, res) {
        const { id } = req.params;
        try {
            console.log("aqui2");
            const exerciseCategory = await db.exercise_category.findOne({ where: { id: id } });
            return res.status(200).json(exerciseCategory);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }

    async getAll(req, res) {
        try {
            console.log("aqui");
            const exerciseCategories = await db.exercise_category.findAll();
            return res.status(200).json(exerciseCategories);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }
}

module.exports = new ExerciseCategoryController();