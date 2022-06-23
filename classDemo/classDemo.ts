class User{
    userName:string;
    age:number;

    constructor(userName:string,age:number){
        this.userName=userName;
        this.age=age;

    }

    display():void{
        console.log(`userName:${this.userName},age:${this.age}`)
    }
}

//let number1=new User("subrata",25);
//number1.display();
let number2=new User("hamind",85);
number2.display();