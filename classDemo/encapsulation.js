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
//private,public,redonly,protected
var UserName = /** @class */ (function () {
    function UserName(provider, age) {
        this.providerName = provider;
        this.providerAge = age;
    }
    UserName.prototype.display = function () {
        console.log("name: ".concat(this.providerName, "\n Age: ").concat(this.providerAge));
    };
    return UserName;
}());
var Userprotect = /** @class */ (function (_super) {
    __extends(Userprotect, _super);
    function Userprotect(providerName, providerAge, userRoll) {
        var _this = _super.call(this, providerName, providerAge) || this;
        _this.userRoll = userRoll;
        return _this;
    }
    Userprotect.prototype.display = function () {
        console.log("Name: ".concat(this.providerName, "\n Age: ").concat(this.providerAge, "\n Class Roll: ").concat(this.userRoll));
    };
    return Userprotect;
}(UserName));
var userprofile = new Userprotect("hamid", 78, 67);
userprofile.display();
var userperson = new UserName("sriload vaggo", 25);
userperson.providerName = "vaggo";
console.log(userperson);
