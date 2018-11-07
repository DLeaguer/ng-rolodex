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

  constructor(private backend: BackendService) {  }

  ngOnInit() {
    
    this.users = this.backend.users;
    this.contacts = this.backend.contacts;
    this.allUsers = this.backend.allUsers;
    this.allContacts = this.backend.allContacts; 
    
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

    //contacts by id
    this.backend.getContact(this.id)
    .then(data => {
      console.log('this.backend.getContact(name) =', this.id)
      console.log('\n*** getContacts[1] from view-contacts', data)
      this.contacts = data
    })
    .catch( err => {
      console.log('\n*** getContacts[1] err from getContacts', err)
    })

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