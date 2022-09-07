const db = require('../models/index');
const AccountType = require('../utils/AccountType');

class ServiceHiringController {
    
    constructor() { }

    async create(req, res) {
        const { clientId, personalId } = req.body;
        try {
            const personal = await db.user.findOne({ where: { id: personalId, accountType: AccountType.personal } });
            if (!personal) return res.status(500).json({ message: 'Personal Id doesn\'t match any personal' });
            const hiring = { clientId, personalId };
            const serviceHiring = await db.service_hiring.create(hiring);
            return res.status(201).json(serviceHiring);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
    }

    async delete(req, res) {
        const { clientId, personalId } = req.body;

        try {
            await db.service_hiring.destroy({ where: { clientId, personalId } })
            return res.status(200).json();
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
    }
}

module.exports = new ServiceHiringController(); 