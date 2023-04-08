export class Member {

    _memberNumber;
    _name;
    _surename;
    _incriptionDate;
    _familyGroup;
    _activities = [];
    _debt = 0;

    constructor(memberNumber, name, surename, date, familyG){
        this._memberNumber = memberNumber;
        this._name = name;
        this._surename = surename;
        this._incriptionDate = date;
        this._familyGroup = familyG;
    }
}