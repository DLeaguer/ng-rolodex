import { Component } from '@angular/core';

@Component({
  selector: 'create-contacts-page',
  templateUrl: './create-contacts.component.html',
  styleUrls: ['./create-contacts.component.scss']
})
export class CreateContactsComponent {

  title: string = 'Contact Page';
  formData: {
    name: string,
    email: string,
    class: string,
  } = {
    name: '',
    email: '',
    class: 'test',
  }

  validName: boolean = false;
  validEmail: boolean = false;

  constructor() {
    
  }

  validateName() {
    console.log('validateNmae');
    if (!this.formData.name) {
      this.validName = false;
    } 
    else if (this.formData.name.length < 3) {
      this.validName = false;
    } 
    else {
      this.validName = true;
    }
  }

  validateEmail() {
    if (!this.formData.email) {
      this.validEmail = false;
    }
    else if (!this.formData.email.includes('@')) {
      this.validEmail = false;
    }
    else if (this.formData.email.length < 3) {
      this.validEmail = false;
    }
    else {
      this.validEmail = true;
    }
  }

  isDisabled() {
    return !this.validName || !this.validEmail;
  }

  submit() {
    console.log(this.formData);
  }

  // title: string = 'Create Contacts';
  // formData: {
  //   fname: string,
  //   lname: string,
  //   password: string,
  //   repeatpassword: string,
  //   class: string,
  // } = {
  //   fname: '',
  //   lname: '',
  //   password: '',
  //   repeatpassword: '',
  //   class: 'test',
  // }

  // constructor() {
    
  // }

  // submit() {
  //   console.log(this.formData);
  // }
}