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
var Person = /** @class */ (function () {
    function Person(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    return Person;
}());
var children = /** @class */ (function (_super) {
    __extends(children, _super);
    function children(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    children.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age, ", id: ").concat(this.studentId));
    };
    return children;
}(Person));
var student3 = new children("keya", 31, 1302020015);
student3.display();
