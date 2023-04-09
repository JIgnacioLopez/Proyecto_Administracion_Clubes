import { Payment } from "./Payment";

export class Payments {
    
    _paymentsObj;

    get paymentsArr() {
        const arr = []
        Object.keys(paymentsObj).forEach(key => {
            arr.push(this._paymentsObj[key])
        })
        return arr;
    }

    newPayment(memberNumber, type, quantity ,date) {
        date = new Date.toLocalDateString();
        const payment = new Payment(memberNumber,type, quantity, date)
        this._paymentsObj[payment.id] = payment;
    }
}