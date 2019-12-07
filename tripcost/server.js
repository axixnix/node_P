// Create a server.js file now, where we’ll store our API code, and start requiring Express and MongoDB:
const express = require('express')
const mongo = require('mongo').MongoClient

// Initialize the Express app:
const app = express()

// add the stubs for the API endpoints we support:
app.post('trip', (req, res) => {
})
app.get('trips', (req, res) => {
})
app.post('expense', (req, res) => {
})
app.get('expenses', (req, res) => {
})

// use the listen() method on app to start the server
app.listen(3000, () => console.log('Server Ready'))
