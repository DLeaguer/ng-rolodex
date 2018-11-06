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
    address: string,
    mobile: string,
    home: string,
    work: string,
    email: string,
    twitter: string,
    instagram: string,
    github: string,
    created_by: string,
    class: string,
  } = {
    name: '',
    address: '',
    mobile: '',
    home: '',
    work: '',
    email: '',
    twitter: '',
    instagram: '',
    github: '',
    created_by: '',
    class: 'test',
  }

  validName: boolean = false;
  validMobile: boolean = false;
  validHome: boolean = false;
  validWork: boolean = false;
  validEmail: boolean = false;
  validTwitter: boolean = false;
  validInstagram: boolean = false;
  validGithub: boolean = false;

  constructor() {  }

  validateName() {
    console.log('validateName');
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

  validateMobile() {
    console.log('validateMobile');
    if (this.formData.mobile.length < 10) {
      this.validMobile = false;
    } 
    else {
      this.validMobile = true;
    }
  }

  validateHome() {
    console.log('validateHome');
    if (this.formData.mobile.length < 12) {
      this.validHome = false;
    } 
    else {
      this.validHome = true;
    }
  }

  validateWork() {
    console.log('validateWork');
    if (this.formData.mobile.length < 12) {
      this.validWork = false;
    } 
    else {
      this.validWork = true;
    }
  }

  validateEmail() {
    if (!this.formData.email.includes('@')) {
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