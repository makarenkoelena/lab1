"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.displayInfo = function () { return "this is a ford"; };
    ;
    return car;
}());
var ford = new car();
console.log(ford.displayInfo());
