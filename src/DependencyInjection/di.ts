class Db{

    conn: string ="conn" ;
    
    connect(){
    console.log("db is connected");

    }


   



}
class User{

name :string="";
db:Db;

constructor(name:string , db :Db){
this.name=name;
this.db= db;



}

add(){
   db.connect()
   console.log( user.name+ "    is added");
   
}


}





const db=new Db()
const user = new User("ABDUL" , db)
user.add();

