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
  newContact: any[] = [];
  obj: any;
  id: any;

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

  contactDetail() {
    const url = this.baseUrl + '/contacts/' + this.id;
    return this.http.get(url).toPromise();
  }

  storeId(id) {
    console.log('storeId id',id)
    console.log('storeId this.id',this.id)
    this.id = id
  }

  deleteContact(id) {
    const url = this.baseUrl + '/deleteContact/' + id;
    return this.http.delete(url).toPromise();
  }

  getContact(id: number) {
    // console.log('this.contacts by id in backend.service called\n', this.contacts)
    const url = this.baseUrl + '/contacts/' + this.id;
    return this.http.get(url).toPromise();
  }

  createContact(contact) {
    console.log('contact', contact)
    this.contacts.push(contact);
  }

  //post new contact form
  createNewContact(obj) {
    const url = this.baseUrl + '/new';
    console.log('createNewContact obj from backend.service', obj)
    return this.http.post(url, obj)
      .subscribe(res => {
      console.log('added to DB')
    });
  }

  // addContact() {
  //   console.log('this.newContact in backend.service called\n', this.newContact)
  //   const url = this.baseUrl + '/newContact';
  //   return this.http.post(url).toPromise();
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