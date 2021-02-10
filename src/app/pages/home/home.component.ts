import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService, private userService: UserService, private router: Router) { }
  rate: number
  rateFloor: number
  rateForDisplay: string
  user: User
  ngOnInit(): void {
    this.getUser()
    this.getRate()
  }

  async getRate() {
    this.rate = 1 / (await this.bitcoinService.getRate())
  this.rateFloor = Math.floor(this.rate)
    this.rateForDisplay = (Math.round(this.rate * 100) / 100).toFixed(2)
  }

  async getUser() {
    try{
      this.user = await this.userService.getUser()
    }catch(err){
      this.router.navigateByUrl('/signup')
    }
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

}
