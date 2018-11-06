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

//POST
app.post('/newContact', (req, res) => {
  console.log('\nPOSTING!!!!!')
  console.log('\nreq.body!!!!!\n')
  console.log(req.body)
  const contact = req.body
  console.log('\ncontact!!!!!\n')
  console.log(contact)
  const newContact = {
    name: contact.name,
    address: contact.address,
    mobile: contact.mobile,
    home: contact.home,
    work: contact.work,
    email: contact.email,
    twitter: contact.twitter,
    instagram: contact.instagram,
    github: contact.github,
    created_by: contact.created_by
  }
  console.log('\nnewContact!!!!!\n')
  console.log(newContact)
  Contacts
  .forge(newContact)
  .save()
  .then( () => {
    return Contacts
    .fetchAll()
    .then( result => {
      res.json(result.serialize())
    })
    .catch( err => {
      console.log('err server.js POST/newContact', err)
    })
  })
})

//DELETE
app.put('/deleteContact', (req, res) => {
  console.log('req.body!!!', req.body)
  console.log('req.body.id!!!', req.body.id)
  let id = req.body.id;
  console.log('id!!!', id)
  Contacts
  // .where({ id })
  .where('id', id)
  .destroy()
  .then( () => {
    console.log('\nserver.js Delete is working!!')
    return Contacts
    .fetchAll()
    })
    .then( contacts => {
      res.json( contacts.serialize())
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

