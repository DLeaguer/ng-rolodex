import { Component } from '@angular/core';

@Component({
  selector: 'create-contacts-page',
  templateUrl: './create-contacts.component.html',
  styleUrls: ['./create-contacts.component.scss']
})
export class CreateContactsComponent {

  title: string = 'Create Contacts';
  formData: {
    fname: string,
    lname: string,
    password: string,
    repeatpassword: string,
    class: string,
  } = {
    fname: '',
    lname: '',
    password: '',
    repeatpassword: '',
    class: 'test',
  }

  constructor() {
    
  }

  submit() {
    console.log(this.formData);
  }
}