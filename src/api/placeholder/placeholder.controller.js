class PlaceholderController {
    constructor() { }
    async test(req, res) {
        res.status(200).json({
            message: "Login successful"
        })
    }
}

module.exports = new PlaceholderController();