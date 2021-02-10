import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
import { Move } from 'src/app/model/move.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router, private userService: UserService) {}

  contact: Contact
  subscription: Subscription
  amount: number
  moves: Move[]

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.contact = data.contact || this.contactService.getEmptyContact()
    })
    this.getContactRelatedMoves()
  }
  goTo(path) {
    this.router.navigateByUrl(path)
  }
  onTransfer() {
    if (!this.amount) return
    this.userService.addMove(this.contact, this.amount)
    this.amount = null
    this.getContactRelatedMoves()
  }
  async getContactRelatedMoves(){
    const user = await this.userService.getUser()
    this.moves = user.moves.filter(move => move.toId === this.contact._id)
  }

}
