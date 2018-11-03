import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  // base1Url: string = 'https://swapi.co/api/';
  // planets: any[] = [];
  // characters: any[] = [];
  baseUrl: string = 'http://localhost:8989';
  users: any[] = [];
  contacts: any[] = [];
  allUsers: any[] = [];
  allContacts: any[] = [];


  constructor(private http: HttpClient) {  }

  getAllUsers() {
    // console.log('this.allUsers in backend.service called\n', this.allUsers)
    const url = this.baseUrl + '/users';
    return this.http.get(url).toPromise();
  }

  getAllContacts() {
    // console.log('this.allContacts in backend.service called\n', this.allContacts)
    const url = this.baseUrl + '/contacts';
    return this.http.get(url).toPromise();
  }

  getUser(id: number) {
    // console.log('this.users by id in backend.service called\n', this.users)
    const url = this.baseUrl + '/users/' + id;
    return this.http.get(url).toPromise();
  }

  getContact(id: number) {
    // console.log('this.contacts by id in backend.service called\n', this.contacts)
    const url = this.baseUrl + '/contacts/' + id;
    return this.http.get(url).toPromise();
  }

  // getCharacter(id: number) {
  //   const url = this.base1Url + 'people/' + id;
  //   return this.http.get(url).toPromise();
  // }

  // getPlanet(id: number) {
  //   const url = this.base1Url + 'planets/' + id;
  //   return this.http.get(url).toPromise();
  // }

  // addCharacters(character) {
  //   console.log('character', character)
  //   this.characters.push(character);
  // }

  // addPlanets(planet) {
  //   console.log('planet', planet)
  //   this.planets.push(planet);
  // }

  register(data) {
    return Promise.resolve({});
  }

  login(data) {
    return Promise.resolve({ username: data.username });

  }

  logout() {
    return Promise.resolve({});
  }
}