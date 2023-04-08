export class Member {

    _memberNumber;
    _name;
    _surename;
    _incriptionDate;
    _familyGroup;
    _activities = [];
    _debt = 0;

    get name(){return this._name}
    get surename() {return this._surename}
    get memberNumber() {return this._memberNumber} 
    get inscriptionDate() {return this._inscriptionDate}
    get debt() {return this._debt}

    constructor(memberNumber, name, surename, date, familyG){
        this._memberNumber = memberNumber;
        this._name = name;
        this._surename = surename;
        this._incriptionDate = date;
        this._familyGroup = familyG;
    }
}