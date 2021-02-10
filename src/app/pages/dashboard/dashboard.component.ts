import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  marketPrices

  ngOnInit(): void {
    this.getMarketPrice()
  }
  async getMarketPrice(){
    const marketPrices = await this.bitcoinService.getMarketPrice()
    this.marketPrices = marketPrices
  }

}
