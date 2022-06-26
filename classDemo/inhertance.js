var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Username = /** @class */ (function () {
    function Username(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Username.prototype.display = function () {
        console.log("username:".concat(this.userName, ",age:").concat(this.age));
    };
    return Username;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentid) {
        return _super.call(this, userName, age) || this;
    }
    return Student;
}(Username));
var student1 = new Student("subrata", 25);
