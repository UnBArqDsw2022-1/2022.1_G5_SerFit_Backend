

class LoginController {
    constructor() { }
    test(req, res) {
        res.status(200).json({
            message: "Login successful"
        })
    }
}