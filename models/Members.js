import { Member } from "Member";

export class Members {
    _objMembers;


    get memberArr () {
        const arr = [];
        Object.keys(this._objMembers).forEach(key => {
            arr.push(this._objMembers[key])
        })
        return arr;
    };

    get debtorsArr () {
        const arr = Object.keys(this._objMembers)
            .filter(key => this._objMembers[key].debt > 0);
        
        return arr;
    };
    
    get onPaymentArr () {
        const arr = Object.keys(this._objMembers)
            .filter(key => this._objMembers[key].debt <= 0);
        
        return arr;
    };

    createNewMember(number, name,surename,date=Date.now(),familyG){
        const member = new Member(number,name,surename,date,familyG)
        if(this.memberArr.incudes(member)) {
            console.log('Este miembro ya existe');
            return;
        }
        this._objMembers[member._memberNumber] = member;
    };
}