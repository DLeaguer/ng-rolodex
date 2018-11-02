//Server

const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const bodyParser = require("body-parser");
// const knex = require('./db/knex.js');
const path = require('path');
// const Users = require('./db/models/users.js');
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);

//Returns already parsed info/object as 'req.body'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  // res.sendFile('../public/index.html')
  res.send('Hello')
})

// app.get('/users', (req, res) => {
//   // use the knex variable above to create dynamic queries
// });

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})