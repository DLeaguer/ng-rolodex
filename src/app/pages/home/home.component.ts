import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  planet: string = 'PLANETS';
  people: string = 'PEOPLE';
  title: string = 'title: single line output';
  subtitle: string;
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

  planets: any[];
  characters: any[];

  constructor(private backend: BackendService) {
    const subtitle: string = 'subtitle: in constructor this.subtitle = subtitle to outside subtitle';
    this.subtitle = subtitle;

    this.data.content = 'this.data.content in constructor'
   }

  ngOnInit() {
    this.characters = this.backend.characters;
    
    this.backend.addCharacters({ name: 'ed', height: 177, mass: 77, hair_color: 'black', eye_color: 'brown', species: 'human', character: 'https://swapi.co/api/people/1/',
    homeworld: 'https://swapi.co/api/planets/10/',
   });
    
    this.planets = this.backend.planets;

    this.backend.addPlanets({ name: 'Earth', terrain: 'oceans, mountains, grasslands, forests', population: '800 Billion', url: 'https://swapi.co/api/planets/1/'})
    
    this.characters.push({ name: 'baseem', height: 177, mass: 77, hair_color: 'black',  eye_color: 'brown', species: 'human', character: 'https://swapi.co/api/people/1/',
    homeworld: 'https://swapi.co/api/planets/12/',
   });

    this.backend.getCharacter(1)
    .then((data) => {
      console.log(data);
      this.characters.push(data)
    });

    this.backend.getCharacter(11)
    .then((data) => {
      console.log(data);
      this.characters.push(data)
    });

    this.backend.getCharacter(10)
    .then((data) => {
      console.log(data);
      this.characters.push(data)
    });

    this.backend.getCharacter(20)
    .then((data) => {
      console.log(data);
      this.characters.push(data)
    });

    this.backend.getCharacter(14)
    .then((data) => {
      console.log(data);
      this.characters.push(data)
    });

    this.backend.getCharacter(4)
    .then((data) => {
      console.log(data);
      this.characters.push(data)
    });

    this.backend.getPlanet(1)
    .then((data) => {
      console.log(data);
      this.planets.push(data)
    })

    this.backend.getPlanet(2)
    .then((data) => {
      console.log(data);
      this.planets.push(data)
    })

    this.backend.getPlanet(20)
    .then((data) => {
      console.log(data);
      this.planets.push(data)
    })

    this.backend.getPlanet(22)
    .then((data) => {
      console.log(data);
      this.planets.push(data)
    })

    this.backend.getPlanet(28)
    .then((data) => {
      console.log(data);
      this.planets.push(data)
    })
  }

}
