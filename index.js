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

async function run(){

    try{
        await client.connect();
        const userCollection = client.db("foodExpress").collection("users");
        const user = {name: 'Ali Hossain',  email:'ali4@gmail.com'};
        const result = await userCollection.insertOne(user);
        console.log(`User inserted with id: ${result.insertedId}`);
    }
    finally{
        // await client.close();

    }
}
run().catch(console.dir);


app.get('/', (req, res) =>{
    res.send('Running node CRUD server');
});


app.listen(port, () =>{
    console.log('CRUD server is running');
})