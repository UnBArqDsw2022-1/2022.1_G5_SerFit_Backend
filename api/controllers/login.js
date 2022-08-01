const db = require('../models/index');
const jwt = require('jsonwebtoken');

class LoginController {
    constructor() { }

    // Método redundante  
    // validateEmail(email)  {
    //     return String(email)
    //     .toLowerCase()
    //     .match(
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     );
    // }

    async login(req, res) {
        const { password, email } = req.body;
        console.log(email)
        if (!email || !password) {
            return res.status(400).json({
              message: "Email or Password not present",
            })
        }
        try {
            const user = await db.user.findOne({ where: { email: email, password: password } });
            if (!user) {
                res.status(400).json({
                    message: "Login not successful",
                    error: "Email or password is wrong",
                })
            } else {
                const id = user.id;
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 300 
                });
                return res.status(201).json({ auth: true, token: token });
            }
        } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
        }
     }
}

module.exports = new LoginController();