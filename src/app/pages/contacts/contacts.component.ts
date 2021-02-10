import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }
  filterBy = ''
  contacts: Contact[]
  subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe(contacts => this.contacts = contacts)
    this.contactService.loadContacts()
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  loadContacts(){
    this.contactService.loadContacts(this.filterBy)
  }
  goTo(path){
    this.router.navigateByUrl(path)
  }
}
