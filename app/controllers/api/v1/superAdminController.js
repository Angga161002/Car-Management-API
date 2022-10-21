const superAdminService = require("../../../services/superAdminService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "secret";

const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await superAdminService.findByEmail(email);
    if (!user) {
        return res.status(404).send({
            message: "Email salah",
        });
    }

    const status = await bcrypt.compare(password, user.password);
    if (!status) {
        return res.status(404).send({
            message: "Password salah",
        });
    }

    const token = jwt.sign({
        user,
        role: "Superadmin"
    }, secretKey);
    res.json({
        user,
        token
    });
};

const listUsers = async (req, res) => {
    try {
        const user = await superAdminService.findAll();
        res.status(200).json({
            status: "OK",
            user,
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    login,
    listUsers,
};