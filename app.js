const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require('dotenv/config');


let connectionString = 

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => 
  console.log('Connected to db!')
)


// const MongoClient = require('mongodb').MongoClient;



// MongoClient.connect(connectionString, { useUnifiedTopology: true }, (err, client) => {
//   if (err) return console.error(err);
//   console.log('connected');

//   const db = client.db('mochi')
//   const mochiCollection = db.collection('mochi-weight')

  // app.post('/', (reeq, res) => {
  //   mochiCollection.insertOne(req.body)
  //   .then(result => {
  //     console.log(result)
  //   })
  //   .catch(error => console.error(error))
  // })
  // await db.collection('mochi').insertMany([
  //   {day: 'Mon', weight: 100},
  //   {day: 'Tues', weight: 99},
  //   {day: 'Weds', weight: 95}
  // ]);
// })


// ROUTES
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');

})




// app.get('/mochi',  (req, res) => {
//   const mochis =  db.collection('mochi').find().toArray();
//   res.json(mochis);
// })




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

app.use('/', (req, res) => {
  console.log('hi!');

})