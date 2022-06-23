var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName:".concat(this.userName, ",age:").concat(this.age));
    };
    return User;
}());
//let number1=new User("subrata",25);
//number1.display();
var number2 = new User("hamind", 85);
number2.display();
