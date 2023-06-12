class GenericNumber<T>{

private _numArray:T[];

constructor(){
    this._numArray=[];
}

addnumber(item :T){
    this._numArray.push(item)
}

printNumArray()
{
    this._numArray.forEach((item)=>{console.log(item);
    })
}

}

let genString  = new GenericNumber<string>()
genString.addnumber("1");
genString.addnumber("2");
let genNumbers = new GenericNumber<number>()
genNumbers.addnumber(1);
genNumbers.addnumber(2);
