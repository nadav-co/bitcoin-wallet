export class Contact {

    constructor(public _id?: string, public name: string = '', public email: string = '', public phone: string = '') {

    }

    setId?() {
        this._id = (Math.random() / Math.random()).toString()
    }
}