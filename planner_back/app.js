const express = require ('express');
const port = 6000 ;
const {dbConnection} = require('./connection/dbconnection')

const app = express();
dbConnection;


app.listen(port, ()=>{
    console.log(`Our app is running on port ${port}`);
})
