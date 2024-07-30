const loginSchema = require('../models/schema');
const bcypt = require('bcrypt');

async function makeUser(req,res){
    try {
        
        const{name,email,password} = req.body;
        const hpassword = await bcrypt.hash(password, 10);

        return res.status(200).json({
            success:true,
            message:`user has been successfully created `
        })


    } catch (error) {
        return res.status(500).json({success:false, meaage:"failed to make a user"})
    }
}
