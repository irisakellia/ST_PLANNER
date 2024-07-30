const mongoose = require('mongoose');

const uri = "mongodb+srv://irisakellia:123@cluster0.jhv2iwc.mongodb.net/stupla?retryWrites=true&w=majority&appName=Cluster0";

const dbConnection = ()=>{

    mongoose.connect(uri);

    mongoose.connection.on("connected", ()=>{
        console.log("successfully connected to the mongodb ");
    })

    mongoose.connection.on("disconnection",()=>{
        console.log("a disconnection from the database ");
    })

    mongoose.connection.on("error",(error)=>{
        console.error(error.message);
    })
}

module.exports = {dbConnection}