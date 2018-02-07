"use strict";
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    return Person;
}());
var p1 = new Person("Lena", 26, "bjkkguyg");
console.log("Name of the person 1 is: ", p1.name);
