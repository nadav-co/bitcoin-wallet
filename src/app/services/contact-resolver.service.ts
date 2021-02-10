import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class contactResolverService implements Resolve<Observable<Contact>> {

  constructor(private contactService: ContactService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Contact> {
    const {contactId } = route.params
    return this.contactService.getContactById(contactId)
  }
}
