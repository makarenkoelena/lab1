"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(year, engine, seats) {
        this.engine = engine;
        this.seats = seats;
        this.year = year;
    }
    return Vehicle;
}());
var myCar = new Vehicle(2010, "bla bla bla", 5);
console.log(" car number of seats ", myCar.seats);
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(year, engine, seats, model) {
        var _this = _super.call(this, year, engine, seats) || this;
        _this.model = model;
        return _this;
    }
    return Car;
}(Vehicle));
var car1 = new Car(201, "bla bla bla", 5, "golf");
console.log(car1);
