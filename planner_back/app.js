const express = require ('express');
const port = 6000 ;
const {dbConnection} = require('./connection/dbconnection');
const router = require('./routes/siroute');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
dbConnection();

app.use(bodyParser.json());
app.use('/api',router )
app.use(cors())


app.listen(port, ()=>{
    console.log(`Our app is running on port ${port}`);
})
