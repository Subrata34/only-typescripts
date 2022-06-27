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
var Mamber = /** @class */ (function () {
    function Mamber(mamberName, mamberAge) {
        this.personName = mamberName;
        this.mamberAge = mamberAge;
    }
    Mamber.prototype.display = function () {
        console.log("Mamber mamber name: ".concat(this.personName, " \n Mamber Age :").concat(this.mamberAge));
    };
    return Mamber;
}());
var children = /** @class */ (function (_super) {
    __extends(children, _super);
    function children(personName, mamberAge, mamberId) {
        var _this = _super.call(this, personName, mamberAge) || this;
        _this.mamberId = mamberId;
        return _this;
    }
    children.prototype.display = function () {
        console.log("this is Name: ".concat(this.personName, " \n Age: ").concat(this.mamberAge, " \n Mamber ID : ").concat(this.mamberId));
    };
    return children;
}(Mamber));
var name3 = new children("subrata", 45, 56);
name3.display();
