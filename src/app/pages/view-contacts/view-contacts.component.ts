import { Component } from '@angular/core';

@Component({
  selector: 'view-contacts-page',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent {

  title: string = 'View All Contacts';
  formData: {
    name: string,
    email: string,
    class: string,
  } = {
    name: '',
    email: '',
    class: 'test',
  }

  constructor() {
    
  }

  submit() {
    console.log(this.formData);
  }

}