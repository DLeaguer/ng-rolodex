import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'view-contacts-page',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit {

  usersTitle: string = 'USERS';
  contactsTitle: string = 'CONTACTS'
 
  users: any
  contacts: any
  allUsers: any
  allContacts: any
  id: any
  deleteContact: any

  constructor(private backend: BackendService) {  }

  //contacts by id
  getId(id) {
    console.log('view-contacts getId id ', id)
    console.log('view-contacts getId this.id', this.id)
    console.log('view-contacts this.backend.storeId', this.backend.storeId)
    this.id = id
    this.backend.storeId = this.id
    console.log('view-contacts getId this.id after',this.id)
    console.log('view-contacts getId this.backend.storeId after',this.backend.storeId)
  }

  delete(id) {
    // console.log('delete in view-contacts id', id)
    // this.backend.getUser(id)
    // .then(data => {
    //   console.log('data from delete in view-contacts',data)
      this.deleteContact = id;
      console.log('delete by id this.deleteContact deleting', this.deleteContact)
      this.backend.deleteContact(this.deleteContact)
    // })
  }

  ngOnInit() {
    
    this.users = this.backend.users;
    this.contacts = this.backend.contacts;
    this.allUsers = this.backend.allUsers;
    this.allContacts = this.backend.allContacts; 
    this.id = this.backend.id;
    
    //users all
    this.backend.getAllUsers()
    .then(data => {
      // console.log('\n*** getAllUsers from view-contacts', data)
      this.allUsers = data
    })
    .catch( err => {
      console.log('\n*** getAllUsers ERR from view-contacts\n', err)
    })

    //contacts all
    this.backend.getAllContacts()
    .then(data => {
      console.log('\n*** getAllContacts from view-contacts', data)
      this.allContacts = data
      console.log('this.allContacts\n',this.allContacts)
    })
    .catch( err => {
      console.log('\n*** getAllContacts ERR from view-contacts\n', err)
    })
    
    // //users by id
    // this.backend.getUser(1)
    // .then((data) => {
    //   console.log('\n*** getUsers[1] from view-contacts', data)
    //   this.users = data

    // })
    // .catch( err => {
    //   console.log('\n**** getUsers[1] err from getUsers', err)
    // })

    // //contacts by id
    // this.backend.getContact(id)
    // .then(data => {
    //   console.log('this.backend.getContact(name) =', id)
    //   console.log('\n*** getContacts[1] from view-contacts', data)
    //   this.contacts = data
    // })
    // .catch( err => {
    //   console.log('\n*** getContacts[1] err from getContacts', err)
    // })

    //  for(let i=1; i<this.users.length; i++){
    //   this.backend.getUsers(i)
    //   .then((data) => {
    //     console.log(data);
    //     this.users.push(data)
    //   });
    //  }

    //  for(let i=1; i<this.contacts.length; i++){
    //   this.backend.getContacts(i)
    //   .then((data) => {
    //     console.log(data);
    //     this.contacts.push(data)
    //   });
    //  }

  }
}