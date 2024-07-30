const express = require ('express');
const port = 6000 ;
const {dbConnection} = require('./connection/dbconnection');
const signuprouter = require('./routes/signup');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
dbConnection();

app.use(cors())
app.use(bodyParser.json());
app.use('/api',signuprouter )



app.listen(port, ()=>{
    console.log(`Our app is running on port ${port}`);
})
