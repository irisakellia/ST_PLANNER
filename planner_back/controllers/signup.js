const User = require('../models/schema');
const bcrypt = require('bcrypt');

async function makeUser(req, res) {
    try {
        const { name, email, password } = req.body;
        const hpassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name, email, password: hpassword,
        });

        return res.status(200).json({
            success: true,
            message: `${newUser} has been successfully created`,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to create user" });
    }
}

module.exports = { makeUser };
