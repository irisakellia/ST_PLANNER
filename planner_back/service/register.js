const loginSchema = require('../models/schema');
const bcrypt = require('bcrypt');


async function makeUser(name,email,password){
    const hpassword = await bcrypt.hash(password,10)

    const createdUser = new user({
        name,email,password:hpassword,
    })

    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = {makeUser}