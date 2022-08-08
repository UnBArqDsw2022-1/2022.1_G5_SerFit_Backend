const db = require('../models/index');

class StoreController {
    constructor() { }

    async get(req, res) {
        const { id } = req.params;
        try {
            const store = await db.store.findOne({ where: { id: id } });
            return res.status(200).json(store);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }

    async getAll(req, res) {
        try {
            const stores = await db.store.findAll();
            return res.status(200).json(stores);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
     }
}

module.exports = new StoreController(); 