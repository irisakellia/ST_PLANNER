const express = require ('express');
const port = 6000 ;

const app = express();

app.listen(port, ()=>{
    console.log(`Our app is running on port ${port}`);
})
