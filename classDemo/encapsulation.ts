//private,public,redonly,protected
class UserName{
    providerName:string;
    providerAge:number;

    constructor(provider:string,age:number){
        this.providerName=provider;
        this.providerAge=age;
    }

    display():void{
        console.log(`name: ${this.providerName}\n Age: ${this.providerAge}`)
    }
}

class Userprotect extends UserName{
    userRoll:number;
    constructor(providerName:string,providerAge:number,userRoll:number){
        super(providerName,providerAge);
        this.userRoll=userRoll;
    }

    display():void{
        console.log(`Name: ${this.providerName}\n Age: ${this.providerAge}\n Class Roll: ${this.userRoll}`)
    }
}

let userprofile=new Userprotect("hamid",78,67);
userprofile.display();