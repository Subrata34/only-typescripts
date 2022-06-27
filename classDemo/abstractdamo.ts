 class PersonName{
    personName:string;
    personAge:number;

    constructor(personName:string,personAge:number){
        this.personName=personName;
        this.personAge=personAge;
    }
    display():void{
        console.log(`this is Name ${this.personName} and His Age is ${this.personAge}`);
    }
}
class Children extends PersonName{
    studentNumber:number;

    constructor(personName:string,personAge:number,studentId:number){
        super(personName,personAge);
        this.studentNumber=studentId;
    }

    display(): void {
        console.log(`this is Name ${this.personName} \n His age ${this.personAge} \n His student Id ${this.studentNumber}`)
    }
}

let person=new Children("subrata",47,56);
person.display();

let user3=new PersonName("anisul haque ",45);
user3.display();