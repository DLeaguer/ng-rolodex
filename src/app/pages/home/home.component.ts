import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // value = ''
  // testNames: object[]
  
  // usersTitle: string = 'USERS';
  // contactsTitle: string = 'CONTACTS';
  // // planet: string = 'PLANETS';
  // // people: string = 'PEOPLE';
  // // title: string = 'title: single line output';
  // // subtitle: string;
  // data: {
  //   search: string,
  //   header: string,
  //   content: string,
  //   class: string,
  // } = {
  //   search: 'Search for a contact...',
  //   header: 'data.header info',
  //   content: 'data.content info',
  //   class: 'search',
  // };
  
  // formData: {
  //   name: string,
  //   email: string,
  //   class: string,
  // } = {
  //   name: '',
  //   email: '',
  //   class: 'test',
  // }

  // // planets: any[];
  // // characters: any[];
  
  // allUsers: any
  // allContacts: any

  constructor() { }

  // constructor(private backend: BackendService) {
    // const subtitle: string = 'subtitle: in constructor this.subtitle = subtitle to outside subtitle';
    // this.subtitle = subtitle;

    // this.data.content = 'this.data.content in constructor'
  //  }

  memes: string[] =['https://media1.tenor.com/images/d2c70f7f64587dc3b7c86ee06756fb4a/tenor.gif?itemid=4294979','http://i.imgur.com/oQ2yUwA.gif', 'https://i.gifer.com/7gMA.gif', 'https://66.media.tumblr.com/8b0615b57a7f46335ebbe68b156cdfbb/tumblr_my8bv1mSFw1rw1wnno2_400.gif','https://66.media.tumblr.com/3196ae9d9db4e26358194e4625cdbd5d/tumblr_n635f3Qt7M1rpe379o1_r1_500.gif', 'https://media.tenor.com/images/d320022232cbe60fb7f342be86806cfa/tenor.gif', 'https://i.gifer.com/SKbd.gif','https://media1.tenor.com/images/b204be74c21b48d8a4e2d49ea72d4154/tenor.gif?itemid=6211667','https://66.media.tumblr.com/a30b7298e8a9d5888cb505befe6c9404/tumblr_mk5qxmEAIl1rznay4o6_250.gif','https://vignette.wikia.nocookie.net/spongebob/images/f/fe/Eh_Eh_Eh_Eh..._SpongeBob.gif/revision/latest?cb=20120329023354']

  // mouseEnter(){
  //   document.getElementById('pic').src = this.memes[Math.floor(Math.random()*this.memes.length)]
  // }
  // mouseLeave(){
  //   document.getElementById('pic').src = this.memes[Math.floor(Math.random()*this.memes.length)]}

  //  search = null;
  //  existingContactsCards = null;
  //  existingCards = null;
  //  users: object[] = [];
  //  contacts: object[] = [];
  //  charName = null;
  //  home: any
  
  // // onKeyUp(event: any) {
  // //   this.value = event.target.value;
  // //   console.log('new type', this.value.toLowerCase());
  // //   let cardName = document.getElementsByClassName('testName');
  // //   let card = document.getElementsByClassName('test');
  // //   for (let i=0; i<cardName.length; i++) {
  // //     if (cardName[i].innerHTML.toString().toLowerCase().startsWith(this.value.toLowerCase())) {
  // //       card[i].style.display = 'block';
  // //     } else {
  // //       card[i].style.display = 'none';
  // //     }
  // //     if (this.value === '') {
  // //       card[i].style.display = 'none';
  // //     }
  // //   }
  // // }

  //  onKey(event: any) {
  //   this.search = document.getElementById('onkeysearch');
  //   this.existingCards = document.getElementsByClassName('existingCards');
  //   this.charName = document.getElementsByClassName('charName');
  //   for (let i = 0; i < this.users.length; i++) {
  //     console.log('\nonKey this.charName[i]\n', this.charName[i])
  //     console.log('\nonKey this.charName[i].innerHTML\n', this.charName[i].innerHTML)
  //     if (this.charName[i].innerHTML.toString().toLowerCase().startsWith(this.search.value.toLowerCase())) {
  //       console.log('\n\nif this.charName[i]', this.charName[i])
  //       console.log('\nif this.charName[i].innerHTML', this.charName.innerHTML)
  //       console.log('\nif this.existingCards[i] *** SHOW ***\n', this.existingCards[i])
  //       this.existingCards[i].style.display = 'inline-block';
  //     } else {
  //       console.log('\nif this.existingCards[i] *** HIDE ***', this.existingCards[i])
  //       this.existingCards[i].style.display = 'none';
  //     }
  //     if (this.search.value === '') {
  //       console.log('\nif this.existingCards[i] *** HIDE empty string ***', this.existingCards[i])
  //       this.existingCards[i].style.display = 'none';
  //     }
  //   }
  //   console.log(this.search.value)
  // }
  
  // countUsers = this.backend.users.length
  // countContacts = this.backend.contacts.length
  // countTotal = this.countUsers + this.countContacts
  
  ngOnInit() {

    
  //   console.log('countUsers', this.countUsers)
  //   console.log('countContacts', this.countContacts)
  //   console.log('countTotal', this.countTotal)
    
  //   this.users = this.backend.users;
  //   // if(this.users.length > 0) {
  //   //   console.log('\nthis users.length', this.users.length)
  //   //   return
  //   // } else {
  //     for(var i = 1; i <=9; i++) {
  //       console.log('\nthis.users index', i)
  //       console.log('this.users[i]', this.users[i] )
  //       console.log('countTotal', this.countTotal)
  //       console.log('this.users.length', this.users.length)
  //       console.log('this.backend.getUser[i]', this.backend.getUser[i])
  //       this.backend.getUser(i)
  //       .then(data => {
  //         this.users.push(data)
  //       })
  //     }
  //   // }

  //   // this.testNames = this.backend.testNames;

  //   // //users by id
  //   // this.users = this.backend.users;
  //   // if(this.users.length > 0) {
  //   //   return 
  //   // } else {
  //   //   for(let i=0; i<=10; i++) {
  //   //     this.backend.getUser(i)
  //   //     .then((data) => {
  //   //       console.log('\n*** getUsers[i] from view-contacts', data)
  //   //       this.users.push(data)
  //   //     })
  //   //     .catch( err => {
  //   //       console.log('\n**** getUsers[i] err from getUsers', err)
  //   //     })
  //   //   }
  //   // }

  //   // //contacts by id
  //   // this.contacts = this.backend.contacts;
  //   // if(this.contacts.length > 0) {
  //   //   return 
  //   // } else {
  //   //   for(let i=0; i<=10; i++) {
  //   //     console.log('is contacts here?')
  //   //     this.backend.getContact(i)
  //   //     .then(data => {
  //   //       console.log('\n*** getContacts[i] from view-contacts', data)
  //   //       this.contacts.push(data)
  //   //     })
  //   //     .catch( err => {
  //   //       console.log('\n*** getContacts[i] err from getContacts', err)
  //   //     })
  //   //   }
  //   // }
    
  //   this.allUsers = this.backend.allUsers;
  //   this.allContacts = this.backend.allContacts; 
  //   this.home = this.backend.home;

  //   this.backend.getHome()
  //   .then(data => {
  //     console.log('\n*** getting data for home')
  //     this.home = data;
  //   })
  //   .catch( err => {
  //     console.log('\nerr for home', err)
  //   })

  //   this.backend.getAllUsers()
  //   .then(data => {
  //     // console.log('\n*** getAllUsers from home', data)
  //     this.allUsers = data
  //   })
  //   .catch( err => {
  //     console.log('\n*** getAllUsers ERR from view-contacts\n', err)
  //   })

  //   //contacts all
  //   this.backend.getAllContacts()
  //   .then(data => {
  //     // console.log('\n*** getAllContacts from home', data)
  //     this.allContacts = data
  //   })
  //   .catch( err => {
  //     console.log('\n*** getAllContacts ERR from view-contacts\n', err)
  //   })

  // //   this.characters = this.backend.characters;
    
  // //   this.backend.addCharacters({ name: 'ed', height: 177, mass: 77, hair_color: 'black', eye_color: 'brown', species: 'human', character: 'https://swapi.co/api/people/1/',
  // //   homeworld: 'https://swapi.co/api/planets/10/',
  // //  });
    
  // //   this.planets = this.backend.planets;

  // //   this.backend.addPlanets({ name: 'Earth', terrain: 'oceans, mountains, grasslands, forests', population: '800 Billion', url: 'https://swapi.co/api/planets/1/'})
    
  // //   this.characters.push({ name: 'baseem', height: 177, mass: 77, hair_color: 'blonde',  eye_color: 'hazel-green', species: 'human', character: 'https://swapi.co/api/people/1/',
  // //   homeworld: 'https://swapi.co/api/planets/12/',
  // //  });

  // //  for(let i=1; i<11; i++){
  // //   this.backend.getCharacter(i)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.characters.push(data)
  // //   });
  // //  }

  // //  for(let i=1; i<11; i++){
  // //    this.backend.getPlanet(i)
  // //    .then((data) => {
  // //      console.log(data);
  // //      this.planets.push(data)
  // //    })
  // //  }
  // // }

  // //   this.backend.getCharacter(1)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.characters.push(data)
  // //   });

  // //   this.backend.getCharacter(11)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.characters.push(data)
  // //   });

  // //   this.backend.getCharacter(10)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.characters.push(data)
  // //   });

  // //   this.backend.getCharacter(20)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.characters.push(data)
  // //   });

  // //   this.backend.getCharacter(14)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.characters.push(data)
  // //   });

  // //   this.backend.getCharacter(4)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.characters.push(data)
  // //   });

  // //   this.backend.getPlanet(1)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.planets.push(data)
  // //   })

  // //   this.backend.getPlanet(2)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.planets.push(data)
  // //   })

  // //   this.backend.getPlanet(20)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.planets.push(data)
  // //   })

  // //   this.backend.getPlanet(22)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.planets.push(data)
  // //   })

  // //   this.backend.getPlanet(28)
  // //   .then((data) => {
  // //     console.log(data);
  // //     this.planets.push(data)
  // //   })
  }
}