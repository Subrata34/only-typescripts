abstract class Person {
    userName: string;
    age: number;
  
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
  
    abstract display(): void;
  }
  
  class children extends Person {
    studentId: number;
  
    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }
  }
  
  let student3 = new children("keya", 31, 1302020015);
  student3.display();