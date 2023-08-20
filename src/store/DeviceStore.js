import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфон'}
        ]
        this._barnds = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [

        ]
        makeAutoObservable(this)
    }
    setTypes (types) {
        this._types = types
    }
    setBrands (brands) {
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }

    getTypes (types) {
       return this._types = types
    }
    getBrands (brands) {
      return  this._brands = brands
    }
    getDevices(devices){
     return   this._devices = devices
    }
}