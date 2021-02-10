import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  async getRate(){
    var BTCRate = JSON.parse(localStorage.getItem('BTCRate'))
    if (!BTCRate || (BTCRate.createdAt > Date.now() + 10000000)){
      const res  = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
      BTCRate = {rate: res.data, createdAt: Date.now()}
      localStorage.setItem('BTCRate', JSON.stringify(BTCRate))
    }
    return BTCRate.rate
  }
  async getMarketPrice(){
    var BTCMarketPrice = JSON.parse(localStorage.getItem('BTCMarketPrice'))
    if (!BTCMarketPrice || (BTCMarketPrice.createdAt > Date.now() + 10000000)){
      const res  = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
      BTCMarketPrice = {data: res.data, createdAt: Date.now()}
      localStorage.setItem('BTCMarketPrice', JSON.stringify(BTCMarketPrice))
    }
    return BTCMarketPrice.data
  }
}
