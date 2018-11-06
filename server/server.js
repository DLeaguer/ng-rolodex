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

// app.get('/home', (req, res) => {
//   // res.sendFile('../public/index.html')
//   // res.send('Hello')
//   console.log('\n**** FETCHALL USERS at home page')
//   Users
//   .fetchAll()
//   .then( items => {
//     // console.log('\n!!!!!users/:user_id items\n', items)
//     console.log('\n**** HOMEPAGE users items.serialize\n', items.serialize())
//     res.json(items.serialize())
//   })
//   Contacts
//   .fetchAll()
//   .then( items => {
//     console.log('\n*** HOMPAGE contacts items.serialize\n', items.serialize())
//   })
//   .catch( err => {
//     console.log('error', err)
//   })
// })

app.get('/users/:user_id', (req, res) => {
  console.log('\n!!!!user/:id route called in express server!!!!')
  // console.log('\n!!!!users/:id req.body\n', req.body)
  console.log('!!!!!user/:id req.params\n', req.params)
  const { user_id } = req.params
  console.log('!!!!!user_id\n', user_id)
  Users
  .where( {user_id} )
  .fetchAll()
  .then( items => {
    // console.log('\n!!!!!users/:user_id items\n', items)
    console.log('\n!!!!!users/:id items.serialize\n', items.serialize())
    res.json(items.serialize())
  })
  .catch( err => {
    console.log('error', err)
  })
})

app.get('/contacts/:contact_id', (req, res) => {
  console.log('\n!!!!contacts/:id route called in express server!!!!!')
  // console.log('\n!!!!contacts/:id req.body\n', req.body)
  console.log('!!! contacts/:id req.params.id\n', req.params.id)
  const { contacts_id } = req.params
  console.log('!!!!!{contacts_id}\n', {contacts_id})
  // .where( {contacts_id} )
  Contacts
  .where( {contact_id} )
  .fetchAll()
  .then( items => {
    console.log('\n!!!!!contacts/:id items.serialize\n', items.serialize())
    res.json(items.serialize())

  }) 
  .catch( err => {
    console.log('error', err)
  })
})

app.get('/users', (req, res) => {
  console.log('\n!!!!users route called in express server!!!!!')
  // console.log('\n!!! users req.body\n', req.body)
  Users
  .fetchAll()
  .then( items => {
    console.log('\n!!! all users items.seralize\n', items.serialize())
    res.json(items.serialize())
  }) 
  .catch( err => {
    console.log('error', err)
  })
});

app.get('/contacts', (req, res) => {
  console.log('\n!!!!contacts route called in express server!!!!!')
  // console.log('\n !!! contacts req.body\n', req.body)
  Contacts
  .fetchAll()
  .then( items => {
    console.log('\n!!! all contacts items.serialize\n', items.serialize())
    res.json(items.serialize())
  }) 
  .catch( err => {
    console.log('error', err)
  })
})

app.listen(PORT, () => {
  console.log(`\n\n\n >>>   *** Listening on ${PORT}... ***   <<<\n\n`)
})