import { v4 as uuidv4 } from "uuid";

export class Payment {
    _id;
    _creditor;  // Quien realiza el pago numero de socio
    _type;      // Motivo del pago
    _date;      // Fecha del pago
    _quantity;  // Cantidad de plata (+ | -)

    get creditor() {return this._creditor}
    get type() {return this._type}
    get date() {return this._date}
    get quantity() {return this._quantity}
    get id() {return this._id}
    
    constructor(creditor, type, quantity, date){
        this._id = uuidv4();
        this._creditor  = creditor;
        this._type      = type;
        this._quantity  = quantity; 
        this._date      = date;
    }
}