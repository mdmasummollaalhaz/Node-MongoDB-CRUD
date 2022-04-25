const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 6001;


//use middleware
app.use(cors());
app.use(express.json());



app.get('/', (req, res) =>{
    res.send('Running node CRUD server');
});


app.listen(port, () =>{
    console.log('CRUD server is running');
})