import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'createContact-page',
  templateUrl: './createContact.component.html',
  styleUrls: ['./createContact.component.scss']
})
export class CreateContactComponent implements OnInit {

  newContact: any;

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
    created_by: number
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
    created_by: null
  }

  validName: boolean = false;
  validEmail: boolean = false;
  
  constructor(private backend: BackendService) {  }

  addContact() {
    console.log('this.formData from addContact', this.formData)
    this.backend.createNewContact(this.formData)
  }

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

  ngOnInit() {  }

}