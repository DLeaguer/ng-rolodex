import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(private backend: BackendService) { }

  id: any;
  contacts: any;

  ngOnInit() {
    this.id = this.backend.id
    this.contacts = this.backend.contacts

    this.backend.contactDetail()
    .then( result => {
      console.log('getContact vrom contact-detail result',result)
    })
  }

}
