const loginSchema = require('../models/schema');
const bcrypt = require('bcrypt');


async function makeUser(name,email,password){
    const hpassword = await bcrypt.hash(password,10)

    const createdUser = newUser({
        name,email,password:hpassword,
    })

    const saveUser = await createdUser.save();
    return saveUser;
}

module.exports = {makeUser}