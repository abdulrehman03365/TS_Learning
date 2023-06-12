var Db = /** @class */ (function () {
    function Db() {
        this.conn = "conn";
    }
    Db.prototype.connect = function () {
        console.log("db is connected");
    };
    return Db;
}());
var User = /** @class */ (function () {
    function User(name, db) {
        this.name = "";
        this.name = name;
        this.db = db;
    }
    User.prototype.add = function () {
        db.connect();
        console.log(user.name + "    is added");
    };
    return User;
}());
var db = new Db();
var user = new User("ABDUL", db);
user.add();
