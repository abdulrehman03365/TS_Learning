"use strict";
class GenericNumber {
    constructor() {
        this._numArray = [];
    }
    addnumber(item) {
        this._numArray.push(item);
    }
    printNumArray() {
        this._numArray.forEach((item) => {
            console.log(item);
        });
    }
}
let genString = new GenericNumber();
genString.addnumber("1");
genString.addnumber("2");
let genNumbers = new GenericNumber();
genNumbers.addnumber(1);
genNumbers.addnumber(2);
genString.printNumArray();
genNumbers.printNumArray();