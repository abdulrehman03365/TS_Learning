class ControlRoom{

private observers :TeamMember[]=[];

addObservers(observer:TeamMember){
this.observers.push(observer);
}

removeObservers(){

}

updateObservers()
{
for (const observer of this.observers)
{
 observer.update("1")
}
}






}

interface update{

     update(actionItem: string) : void;
}


class TeamMember implements update{

    name : string; 

    constructor(name : string)
    {
        this.name=name;
    }

    update(actionItem: string): void {
        console.log(this.name + " i m updated with actionItem" + actionItem );
        
    }
}


const ali= new TeamMember("Ali");
const controlRoom = new ControlRoom();
controlRoom.addObservers(ali)
controlRoom.updateObservers();