const express = require('express');
const mongoose = require('mongoose');
// const { reset } = require('nodemon');
const cors = require('cors');


require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('Connected to db!'))



const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/public/index.html');
  res.send('It has been connected!')
})



app.get('/mochi',  (req, res) => {
  const mochis =  db.collection('mochi').find().toArray();
  res.json(mochis);
})




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
