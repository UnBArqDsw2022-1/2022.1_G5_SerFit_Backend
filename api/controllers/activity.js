const db = require('../models/index');

class ActivityController {
    constructor() { }

    async get(req, res) {
        const { id } = req.params;
        try {
            const activity = await db.activity.findOne({ where: { id: id }, include: db.gym });
            return res.status(200).json(activity);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }

    async getAll(req, res) {
        try {
            const activities = await db.activity.findAll({ include: db.gym });
            return res.status(200).json(activities);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }

     async getDetail(req, res) {
        const { activityId, gymId } = req.params;
        try {
            const detail = await db.activity_gym.findOne({ where: { activityId, gymId } })
            return res.status(200).json(detail);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }
}

module.exports = new ActivityController(); 