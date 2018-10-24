import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl: string = 'https://swapi.co/api/';

  planets: any[] = [];
  characters: any[] = [];
  
  constructor(private http: HttpClient) {

  }

  getCharacter(id: number) {
    const url = this.baseUrl + 'people/' + id;
    return this.http.get(url).toPromise();
  }

  getPlanet(id: number) {
    const url = this.baseUrl + 'planets/' + id;
    return this.http.get(url).toPromise();
  }

  addCharacters(character) {
    console.log('character', character)
    this.characters.push(character);
  }

  addPlanets(planet) {
    console.log('planet', planet)
    this.planets.push(planet);
  }
}