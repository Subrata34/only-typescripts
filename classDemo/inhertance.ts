class Username{
    userName:string;
    age:number;

    constructor(userName:string,age:number){
        this.userName=userName;
        this.age=age;
    }
    display():void{
        console.log(`username:${this.userName},age:${this.age}`)
    }
}
class Student extends Username{
  studentid:number
  
 
 
  constructor(userName:string,age:number,studentid:number){
   super(userName,age)
 }

}
let student1= new Student("subrata",25);