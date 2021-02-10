import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }
  contact: Contact
  contactCopy: Contact
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.contact = data.contact || this.contactService.getEmptyContact()
    })
    this.contactCopy = {...this.contact}
  }
  onSaveContact() {
    this.contactService.saveContact(this.contact)
    if (this.contact._id) this.router.navigateByUrl('/contact/' + this.contact._id)
    else this.router.navigateByUrl('/contact')
  }

  goTo(path){
    this.router.navigateByUrl(path)
  }

  cancel(){
    this.contact = {...this.contactCopy}
  }
}
