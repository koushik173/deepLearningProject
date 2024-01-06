const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

app.use(cors());
app.use(express.json());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7om1ewe.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    await client.connect();
    
    const usersCollection = client.db('AgroSheild').collection('allusers');
    const diseasesCollection = client.db('AgroSheild').collection('allDiseasesInfo');
    const cropsCollection = client.db('AgroSheild').collection('cropsInfo');
    const agriculeristCollection = client.db('AgroSheild').collection('agriculerist');

    app.get('/users', async (req, res) => {
      const query = {}
      const user = await usersCollection.find(query).toArray();
      res.send(user)
    })

    app.post('/users', async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result)
    })

    app.get('/all_diseases_info', async (req, res) => {
      const query = {}
      const disInfo = await diseasesCollection.find(query).toArray();
      res.send(disInfo)
    })

    app.get('/search_diseases/:name', async (req, res) => {
      const searchName = req.params.name; 

      const query = { name: { $regex: searchName, $options: 'i' } };
      const disInfo = await diseasesCollection.find(query).toArray();

      res.send(disInfo);
    });

    app.get('/all_crops_info', async (req, res) => {
      const query = {}
      const disInfo = await cropsCollection.find(query).toArray();
      res.send(disInfo)
    })

    app.post('/all_crops_info', async (req, res) => {
      const cropNames = req.body;
      try {
        const data = []
        for (const cropName of cropNames) {
          const query = { Crops: { $regex: cropName, $options: 'i' } };
          const cropInfo = await cropsCollection.find(query).toArray();
          data.push(...cropInfo);
        }

        res.send(data);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
    });

    app.get('/search_crops/:name', async (req, res) => {
      const searchName = req.params.name; 
      const query = { Crops: { $regex: searchName, $options: 'i' } };
      const cropsInfo = await cropsCollection.find(query).toArray();

      res.send(cropsInfo);
    });

    app.get('/agriculerist', async (req, res) => {
      const query = {}
      const disInfo = await agriculeristCollection.find(query).toArray();
      res.send(disInfo)
    })


  } finally {
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Krishna wishes! I am Alive from agroSheld_home')
})

app.listen(port, () => {
  console.log(`AlgroSheild app port ${port}`)
})