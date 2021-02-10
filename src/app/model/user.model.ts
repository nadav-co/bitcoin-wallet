export class User {

  constructor(public _id?: string, public name: string = '', public coins: number = 100, public moves: Array<any> = []) {

  }

  setId?() {
    this._id = (Math.random() / Math.random()).toString()
  }
}