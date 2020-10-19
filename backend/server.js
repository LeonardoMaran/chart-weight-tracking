const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');


require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('Connected to db!'))


// Set up router
const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/public/index.html');
  res.send('Connected')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
