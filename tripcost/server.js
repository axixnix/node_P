// Create a server.js file now, where we’ll store our API code, and start requiring Express and MongoDB:
const express = require('express')
const mongo = require('mongodb').MongoClient

// Initialize the Express app:
const app = express()

const url = 'mongodb://localhost:27017' // because 27017 is the default port, this is the mongodb server url

// add the stubs for the API endpoints we support:
app.use(express.json())

app.post('/trip', (req, res) => { /*If you get an error like “could not read property insertOne of undefined”,
     make sure trips is successfully set in mongo.connect().
      Add a console.log(trips) before calling insertOne() to 
      make sure it contains the collection object.*/
  const name = req.body.name
  trips.insertOne({name: name}, (err, result) => {
    if (err) {
      console.error(err)
      res.status(500).json({err: err})
      return
    }
    console.log(result)
    res.status(200).json({ok: true})
  })
})



app.get('trips', (req, res) => {
})
app.post('expense', (req, res) => {
})
app.get('expenses', (req, res) => {
})

// use the listen() method on app to start the server
app.listen(3000, () => console.log('Server Ready'))

let db,trips,expenses

// connecting to the database
mongo.connect(url, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  db = client.db('tripcost')
  trips = db.collection('trips')
  expenses = db.collection('expenses')
})


