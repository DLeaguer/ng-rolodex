import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'view-contacts-page',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent {

  usersTitle: string = 'USERS';
  contactsTitle: string = 'CONTACTS'
  // planet: string = 'PLANETS';
  // people: string = 'PEOPLE';
  // title: string = 'title: single line output';
  // subtitle: string;
  // data: {
  //   search: string,
  //   header: string,
  //   content: string,
  //   class: string,
  // } = {
  //     search: 'Search for a contact...',
  //     header: 'data.header info',
  //     content: 'data.content info',
  //     class: 'search',
  //   };

  // formData: {
  //   name: string,
  //   email: string,
  //   class: string,
  // } = {
  //     name: '',
  //     email: '',
  //     class: 'test',
  //   }

  // planets: any[];
  // characters: any[];

  users: any[]
  contacts: any[]
  allUsers: any[]
  allContacts: any[]

  constructor(private backend: BackendService) {

    // const subtitle: string = 'subtitle: in constructor this.subtitle = subtitle to outside subtitle';
    // this.subtitle = subtitle;

    // this.data.content = 'this.data.content in constructor'
  }

  ngOnInit() {
    
    this.users = this.backend.users;
    this.contacts = this.backend.contacts;
    this.allUsers = this.backend.allUsers;
    this.allContacts = this.backend.allContacts; 

  //   this.backend.getCharacter(1)
  //   .then((data) => {
  //     console.log(data);
  //     this.characters.push(data)
  //   });

    //users by id
    this.backend.getUser(1)
    .then((data) => {
      console.log('\n*** getUsers[1] from view-contacts', data)
      this.users.push(data)
    })
    .catch( err => {
      console.log('\n**** getUsers[1] err from getUsers', err)
    })

    //contacts by id
    this.backend.getContact(1)
    .then(data => {
      console.log('\n*** getContacts[1] from view-contacts', data)
      this.contacts.push(data)
    })
    .catch( err => {
      console.log('\n*** getContacts[1] err from getContacts', err)
    })
    
    //users all
    this.backend.getAllUsers()
    .then(data => {
      console.log('\n*** getAllUsers from view-contacts', data)
      this.allUsers.push(data)
    })
    .catch( err => {
      console.log('\n*** getAllUsers ERR from view-contacts', err)
    })

    //contacts all
    this.backend.getAllContacts()
    .then(data => {
      console.log('\n*** getAllContacts from view-contacts', data)
      this.allContacts.push(data)
    })
    .catch( err => {
      console.log('\n*** getAllContacts ERR from view-contacts', err)
    })



    // this.characters = this.backend.characters;

    // this.backend.addCharacters({
    //   name: 'ed', height: 177, mass: 77, hair_color: 'black', eye_color: 'brown', species: 'human', character: 'https://swapi.co/api/people/1/',
    //   homeworld: 'https://swapi.co/api/planets/10/',
    // });

    // this.planets = this.backend.planets;

    // this.backend.addPlanets({ name: 'Earth', terrain: 'oceans, mountains, grasslands, forests', population: '800 Billion', url: 'https://swapi.co/api/planets/1/' })

    // this.characters.push({
    //   name: 'baseem', height: 177, mass: 77, hair_color: 'blonde', eye_color: 'hazel-green', species: 'human', character: 'https://swapi.co/api/people/1/',
    //   homeworld: 'https://swapi.co/api/planets/12/',
    // });

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

    // for (let i = 1; i < 5; i++) {
    //   this.backend.getCharacter(i)
    //     .then((data) => {
    //       console.log(data);
    //       this.characters.push(data)
    //     });
    // }

    // for (let i = 1; i < 5; i++) {
    //   this.backend.getPlanet(i)
    //     .then((data) => {
    //       console.log(data);
    //       this.planets.push(data)
    //     })
    // }
  }

  // title: string = 'View All Contacts';
  // formData: {
  //   name: string,
  //   email: string,
  //   class: string,
  // } = {
  //   name: '',
  //   email: '',
  //   class: 'test',
  // }

  // constructor() {

  // }

  // submit() {
  //   console.log(this.formData);
  // }

}