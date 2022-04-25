const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 6001;


//use middleware
app.use(cors());
app.use(express.json());


//dbuser1
//password: PMsiZ5d1dQEKfzux

const uri = "mongodb+srv://bduser:PMsiZ5d1dQEKfzux@cluster0.9bi2h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('db connected');
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) =>{
    res.send('Running node CRUD server');
});


app.listen(port, () =>{
    console.log('CRUD server is running');
})