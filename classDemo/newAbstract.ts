class Mamber{
    personName:string;
    mamberAge :number;

    constructor(mamberName:string,mamberAge:number){
        this.personName=mamberName;
        this.mamberAge=mamberAge;

    }

    display():void{
        console.log(`Mamber mamber name: ${this.personName} \n Mamber Age :${this.mamberAge}`)
    }
}

class children extends Mamber{
    mamberId :number;

    constructor(personName:string,mamberAge:number,mamberId:number){
        super(personName,mamberAge);
        this.mamberId=mamberId;
    }
    display(): void {
        console.log(`this is Name: ${this.personName} \n Age: ${this.mamberAge} \n Mamber ID : ${this.mamberId}`)
    }
}

let name3=new children("subrata",45,56);
name3.display();