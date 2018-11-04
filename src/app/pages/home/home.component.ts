import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  value = ''
  testNames: object[]
  
  usersTitle: string = 'USERS';
  contactsTitle: string = 'CONTACTS';
  // planet: string = 'PLANETS';
  // people: string = 'PEOPLE';
  // title: string = 'title: single line output';
  // subtitle: string;
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

  // planets: any[];
  // characters: any[];
  
  allUsers: any
  allContacts: any

  constructor(private backend: BackendService) {
    // const subtitle: string = 'subtitle: in constructor this.subtitle = subtitle to outside subtitle';
    // this.subtitle = subtitle;

    // this.data.content = 'this.data.content in constructor'
   }
   search = null;
   existingContactsCards = null;
   existingCards = null;
   users: object[] = [];
   charName = null;
  
   onKey(event: any) {
    this.search = document.getElementById('search');
    this.existingCards = document.getElementsByClassName('existingCards');
    this.charName = document.getElementsByClassName('charName');
    for (let i = 0; i < this.users.length; i++) {
      if (this.charName[i].innerHTML.toString().toLowerCase().startsWith(this.search.value.toLowerCase())) {
        this.existingCards[i].style.display = 'inline-block';
      } else {
        this.existingCards[i].style.display = 'none';
      }
      if (this.search.value === '') {
        this.existingCards[i].style.display = 'none';
      }
    }
    console.log(this.search.value)
  }

  ngOnInit() {

    this.users = this.backend.users;
    if(this.users.length > 0) {
      return
    } else {
      for(var i = 1; i <= 10; i++) {
        this.backend.getUser(i)
        .then(data => {
          this.users.push(data)
        })
      }
    }
    // this.testNames = this.backend.testNames;

    this.allUsers = this.backend.allUsers;
    this.allContacts = this.backend.allContacts; 
    
    this.backend.getAllUsers()
    .then(data => {
      // console.log('\n*** getAllUsers from home', data)
      this.allUsers = data
    })
    .catch( err => {
      console.log('\n*** getAllUsers ERR from view-contacts', err)
    })

    //contacts all
    this.backend.getAllContacts()
    .then(data => {
      // console.log('\n*** getAllContacts from home', data)
      this.allContacts = data
    })
    .catch( err => {
      console.log('\n*** getAllContacts ERR from view-contacts', err)
    })

  //   this.characters = this.backend.characters;
    
  //   this.backend.addCharacters({ name: 'ed', height: 177, mass: 77, hair_color: 'black', eye_color: 'brown', species: 'human', character: 'https://swapi.co/api/people/1/',
  //   homeworld: 'https://swapi.co/api/planets/10/',
  //  });
    
  //   this.planets = this.backend.planets;

  //   this.backend.addPlanets({ name: 'Earth', terrain: 'oceans, mountains, grasslands, forests', population: '800 Billion', url: 'https://swapi.co/api/planets/1/'})
    
  //   this.characters.push({ name: 'baseem', height: 177, mass: 77, hair_color: 'blonde',  eye_color: 'hazel-green', species: 'human', character: 'https://swapi.co/api/people/1/',
  //   homeworld: 'https://swapi.co/api/planets/12/',
  //  });

  //  for(let i=1; i<11; i++){
  //   this.backend.getCharacter(i)
  //   .then((data) => {
  //     console.log(data);
  //     this.characters.push(data)
  //   });
  //  }

  //  for(let i=1; i<11; i++){
  //    this.backend.getPlanet(i)
  //    .then((data) => {
  //      console.log(data);
  //      this.planets.push(data)
  //    })
  //  }
  // }

  //   this.backend.getCharacter(1)
  //   .then((data) => {
  //     console.log(data);
  //     this.characters.push(data)
  //   });

  //   this.backend.getCharacter(11)
  //   .then((data) => {
  //     console.log(data);
  //     this.characters.push(data)
  //   });

  //   this.backend.getCharacter(10)
  //   .then((data) => {
  //     console.log(data);
  //     this.characters.push(data)
  //   });

  //   this.backend.getCharacter(20)
  //   .then((data) => {
  //     console.log(data);
  //     this.characters.push(data)
  //   });

  //   this.backend.getCharacter(14)
  //   .then((data) => {
  //     console.log(data);
  //     this.characters.push(data)
  //   });

  //   this.backend.getCharacter(4)
  //   .then((data) => {
  //     console.log(data);
  //     this.characters.push(data)
  //   });

  //   this.backend.getPlanet(1)
  //   .then((data) => {
  //     console.log(data);
  //     this.planets.push(data)
  //   })

  //   this.backend.getPlanet(2)
  //   .then((data) => {
  //     console.log(data);
  //     this.planets.push(data)
  //   })

  //   this.backend.getPlanet(20)
  //   .then((data) => {
  //     console.log(data);
  //     this.planets.push(data)
  //   })

  //   this.backend.getPlanet(22)
  //   .then((data) => {
  //     console.log(data);
  //     this.planets.push(data)
  //   })

  //   this.backend.getPlanet(28)
  //   .then((data) => {
  //     console.log(data);
  //     this.planets.push(data)
  //   })
  }
}