import { Injectable } from '@angular/core';
import { Move } from '../model/move.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  user: User=null
  getUser(){
    const user = localStorage.getItem('BTUser')
    if (!user) return Promise.reject('no user')
    this.user = JSON.parse(user)
    return Promise.resolve(this.user)
  }

  signup(name){
    const user = new User()
    user.name = name
    user.setId()
    this.user = user
    this._saveUser()
  }
  addMove(contact, amount){
    const move = new Move()
    move.amount = amount
    move.toId = contact._id
    move.to = contact.name
    const moves = [move, ...this.user.moves]
    const user = {...this.user, moves}
    user.coins -= amount
    this.user = user
    this._saveUser()
    return user 
  }
  private _saveUser(){
    localStorage.setItem('BTUser', JSON.stringify(this.user))
  }
}
