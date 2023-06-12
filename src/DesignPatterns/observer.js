var ControlRoom = /** @class */ (function () {
    function ControlRoom() {
        this.observers = [];
    }
    ControlRoom.prototype.addObservers = function (observer) {
        this.observers.push(observer);
    };
    ControlRoom.prototype.removeObservers = function () {
    };
    ControlRoom.prototype.updateObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update("1");
        }
    };
    return ControlRoom;
}());
var TeamMember = /** @class */ (function () {
    function TeamMember(name) {
        this.name = name;
    }
    TeamMember.prototype.update = function (actionItem) {
        console.log(this.name + " i m updated with actionItem" + actionItem);
    };
    return TeamMember;
}());
var ali = new TeamMember("Ali");
var controlRoom = new ControlRoom();
controlRoom.addObservers(ali);
controlRoom.updateObservers();
