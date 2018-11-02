//Server

const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const bodyParser = require("body-parser");
const cors = require('cors');
// const knex = require('./db/knex.js');
const path = require('path');
const Users = require('./db/models/users.js');
const Contacts = require('./db/models/contacts.js');
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);

//Returns already parsed info/object as 'req.body'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());

app.get('/', (req, res) => {
  // res.sendFile('../public/index.html')
  res.send('Hello')
})

app.get('/users/:id', (req, res) => {
  console.log('\n!!!!user/:id route called in express server!!!!\n')
  console.log('\n!!!!users/:id req.body', req.body)
  console.log('user/:id req.params', req.params)
  const { user_id } = req.params.id
  console.log('user_id', user_id)
  // .where( {user_id} )
  Users
  .fetchAll()
  .then( items => {
    res.json(items.serialize())
  })
  .catch( err => {
    console.log('error', err)
  })
})

app.get('/contacts/:id', (req, res) => {
  console.log('\n!!!!contacts/:id route called in express server!!!!!\n')
  console.log('\n!!!!contacts/:id req.body', req.body)
  console.log('!!! contacts/:id req.params.id', req.params.id)
  const { contacts_id } = req.params.id
  console.log('{contacts_id}', {contacts_id})
  // .where( {contacts_id} )
  Contacts
  .fetchAll()
  .then( items => {
    res.json(items.serialize())
  }) 
  .catch( err => {
    console.log('error', err)
  })
})

app.get('/users', (req, res) => {
  console.log('\n!!!!users route called in express server!!!!!\n')
  console.log('\n!!! users req.body', req.body)
  Users
  .fetchAll()
  .then( items => {
    res.json(items.serialize())
  }) 
  .catch( err => {
    console.log('error', err)
  })
});

app.get('/contacts', (req, res) => {
  console.log('\n!!!!contacts route called in express server!!!!!\n')
  console.log('\n !!! contacts req.body', req.body)
  Contacts
  .fetchAll()
  .then( items => {
    res.json(items.serialize())
  }) 
  .catch( err => {
    console.log('error', err)
  })
})

app.listen(PORT, () => {
  console.log(`\n\nListening on ${PORT}...\n\n`)
})