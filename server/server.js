//Server

const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT
const bodyParser = require("body-parser");
const cors = require('cors');
// const knex = require('./db/knex.js');
// const path = require('path');
const Users = require('./db/models/users.js');
const Contacts = require('./db/models/contacts.js');
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);

//Returns already parsed info/object as 'req.body'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

// user by id
app.get('/users/:id', (req, res) => {
  console.log('\n!!!!user/:id route called in express server!!!!')
  // console.log('\n!!!!users/:id req.body\n', req.body)
  console.log('!!!!!user/:id req.params\n', req.params)
  const { id } = req.params
  console.log('!!!!!id\n', id)
  Users
  .where( {id} )
  .fetchAll()
  .then( items => {
    // console.log('\n!!!!!users/:id items\n', items)
    console.log('\n!!!!!users/:id items.serialize\n', items.serialize())
    res.json(items.serialize())
  })
  .catch( err => {
    console.log('error', err)
  })
})

// contact by id
app.get('/contacts/:id', (req, res) => {
  console.log('\n!!!!contacts/:id route called in express server!!!!!')
  console.log('\n!!!!contacts/:id req.body\n', req.body)
  console.log('!!! contacts/:id req.params.id\n', req.params.id)
  const { id } = req.params
  console.log('!!!!!{id}\n', {id})
  // .where( {contacts_id} )
  Contacts
  .where( {id} )
  .fetchAll()
  .then( items => {
    console.log('\n!!!!!contacts/:id items.serialize\n', items.serialize())
    res.json(items.serialize())

  }) 
  .catch( err => {
    console.log('error', err)
  })
})

//all users
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

//all contacts
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

//POST
app.post('/new', (req, res) => {
  // console.log('\nPOSTING!!!!!')
  // console.log('\nreq.body!!!!!\n')
  // console.log(req.body)
  const contact = req.body
  // console.log('\ncontact!!!!!\n')
  // console.log(contact)
  const newContact = {
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    home: req.body.home,
    work: req.body.work,
    email: req.body.email,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    github: req.body.github,
    created_by: req.body.created_by
  }
  // console.log('\nnewContact from server.js!!!!!\n')
  console.log("HI", newContact);
  Contacts
  .forge(newContact)
  .save()
  .then( (data) => {
  Contacts
    .fetchAll()
    .then( result => {
      console.log('newContact result', result)
      res.json(result.serialize())
    })
    .catch( err => {
      console.log('err server.js POST/newContact', err)
      res.json(err)
    })
  })
})

// app.post("/new", (req, res) => {
//   res.json("hi");
// })

//DELETE
app.delete('/deleteContact/:id', (req, res) => {
  console.log('req.body!!!', req.body)
  console.log('req.params!!!', req.params)
  let {id} = req.params;
  console.log('id!!!', id)
  Contacts
  .where({ id })
  // .where('id', id)
  .destroy()
  .then( () => {
    console.log('\nserver.js Delete is working!!')
    return Contacts
    .fetchAll()
    })
    .then( result => {
      res.json( result.serialize())
    })
    .catch( err => {
      console.log('err server DELETE', err)
    })
})

//PUT
app.put("/editContact", (req, res) => {
  console.log("\n---> Backend PUT /editContact");
  // console.log("\nBackend - PUT req.params:", req.params);
  console.log("\nBackend - PUT req.body:", req.body);

  // const { id } = req.params;
  // console.log("\n Check id:", id);

  const updatedContact = {
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    home: req.body.home,
    work: req.body.work,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    github: req.body.github,
    created_by: req.body.created_by,
  }

  Contacts
    .where('id', req.body.id)
    .fetch()
    .then(results => {
      console.log("\nBackend - PUT results:", results);
      results.save(updatedContact);
      return Contact.fetchAll()
    })
    .then(contacts => {
      res.json(contacts.serialize());
    })
    .catch(err => {
      console.log("Backend PUT didn't work");
      res.json("FAILED");
    })

})


app.listen(PORT, () => {
  console.log(`\n\n\n >>>   *** Listening on ${PORT}... ***   <<<\n\n`)
})

