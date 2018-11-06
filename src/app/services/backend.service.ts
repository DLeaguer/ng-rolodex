import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  // baseUrl: string = 'http://54.185.0.112:8989';
  baseUrl: string = 'http://localhost:8989';
  users: any[] = [];
  contacts: any[] = [];
  allUsers: any[] = [];
  allContacts: any[] = [];
  home: any[] = [];

  constructor(private http: HttpClient) {  }

  // getHome() {
  //   const url = this.baseUrl + '/home';
  //   return this.http.get(url).toPromise();
  // }

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