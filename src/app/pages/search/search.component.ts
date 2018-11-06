import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  value = ''
  search = null;
  existingContactsCards = null;
  existingCards = null;
  users: object[] = [];
  contacts: object[] = [];
  charName = null;
  allUsers: any
  allContacts: any
  
  usersTitle: string = 'USERS';
  contactsTitle: string = 'CONTACTS';

  data: {
    search: string,
    header: string,
    content: string,
    class: string,
  } = {
    search: 'Search for a contact...',
    header: 'data.header info',
    content: 'data.content info',
    class: 'search',
  };
  
  formData: {
    name: string,
    email: string,
    class: string,
  } = {
    name: '',
    email: '',
    class: 'test',
  }

  constructor(private backend: BackendService) {  }
  
  // onKeyUp(event: any) {
  //   this.value = event.target.value;
  //   console.log('new type', this.value.toLowerCase());
  //   let cardName = document.getElementsByClassName('testName');
  //   let card = document.getElementsByClassName('test');
  //   for (let i=0; i<cardName.length; i++) {
  //     if (cardName[i].innerHTML.toString().toLowerCase().startsWith(this.value.toLowerCase())) {
  //       card[i].style.display = 'block';
  //     } else {
  //       card[i].style.display = 'none';
  //     }
  //     if (this.value === '') {
  //       card[i].style.display = 'none';
  //     }
  //   }
  // }

   onKey(event: any) {
    this.search = document.getElementById('onkeysearch');
    this.existingCards = document.getElementsByClassName('existingCards');
    this.charName = document.getElementsByClassName('charName');
    for (let i = 0; i < this.users.length; i++) {
      console.log('\nSTART ONKEY')
      console.log('\nonKey this.charName[i]\n', this.charName[i])
      console.log('\nonKey this.charName[i].innerHTML\n', this.charName[i].innerHTML)
      if (this.search.value === '') {
        console.log('\nif this.existingCards[i] *** HIDE empty string ***', this.existingCards[i])
        this.existingCards[i].style.display = 'none';
      }
      else if (this.charName[i].innerHTML.toString().toLowerCase().startsWith(this.search.value.toLowerCase())) {
        console.log('\n\nif this.charName[i]', this.charName[i])
        console.log('\nif this.charName[i].innerHTML', this.charName.innerHTML)
        console.log('\nif this.existingCards[i] *** SHOW ***\n', this.existingCards[i])
        this.existingCards[i].style.display = 'inline-block';
      } 
      else {
        console.log('\nif this.existingCards[i] *** HIDE ***', this.existingCards[i])
        this.existingCards[i].style.display = 'none';
      }
    }
    console.log(this.search.value)
    console.log('\nEND ONKEY')
  }

  refresh(): void {
    window.location.reload();
  }
  
  countUsers = this.backend.users.length
  countContacts = this.backend.contacts.length
  countTotal = this.countUsers + this.countContacts
  
  ngOnInit() {
    
    console.log('countUsers', this.countUsers)
    console.log('countContacts', this.countContacts)
    console.log('countTotal', this.countTotal)
    
    this.users = this.backend.users;
    this.allUsers = this.backend.allUsers;
    this.allContacts = this.backend.allContacts; 

    // if(this.users.length > 0) {
    //   console.log('\nthis users.length', this.users.length)
    //   return
    // } else {
      for(var i = 1; i <=9; i++) {
        console.log('\nthis.users index', i)
        console.log('this.users[i]', this.users[i] )
        console.log('countTotal', this.countTotal)
        console.log('this.users.length', this.users.length)
        console.log('this.backend.getUser[i]', this.backend.getUser[i])
        this.backend.getUser(i)
        .then(data => {
          this.users.push(data)
        })
      }
    // }
    
    this.backend.getAllUsers()
    .then(data => {
      // console.log('\n*** getAllUsers from home', data)
      this.allUsers = data
    })
    .catch( err => {
      console.log('\n*** getAllUsers ERR from view-contacts\n', err)
    })

    //contacts all
    this.backend.getAllContacts()
    .then(data => {
      // console.log('\n*** getAllContacts from home', data)
      this.allContacts = data
    })
    .catch( err => {
      console.log('\n*** getAllContacts ERR from view-contacts\n', err)
    })

    // //users by id
    // this.users = this.backend.users;
    // if(this.users.length > 0) {
    //   return 
    // } else {
    //   for(let i=0; i<=10; i++) {
    //     this.backend.getUser(i)
    //     .then((data) => {
    //       console.log('\n*** getUsers[i] from view-contacts', data)
    //       this.users.push(data)
    //     })
    //     .catch( err => {
    //       console.log('\n**** getUsers[i] err from getUsers', err)
    //     })
    //   }
    // }

    // //contacts by id
    // this.contacts = this.backend.contacts;
    // if(this.contacts.length > 0) {
    //   return 
    // } else {
    //   for(let i=0; i<=10; i++) {
    //     console.log('is contacts here?')
    //     this.backend.getContact(i)
    //     .then(data => {
    //       console.log('\n*** getContacts[i] from view-contacts', data)
    //       this.contacts.push(data)
    //     })
    //     .catch( err => {
    //       console.log('\n*** getContacts[i] err from getContacts', err)
    //     })
    //   }
    // }
  }
}