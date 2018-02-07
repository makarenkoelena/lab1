"use strict";
//boolean 
var flag = true;
console.log("Value assigned to flag is: " + flag);
//number
var num1 = 6;
console.log("Value assigned to num1 is " + num1);
//string
var color = "blue";
console.log("Value assigned to color is " + color);
//array
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("Number " + (i + 1) + " is: " + list[i] + ".");
}
//tuple
var x = ["hello", 10];
console.log("Tuple example: " + x[0].substr(1));
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log("Enum: Value of colorName is " + colorName);
console.log("Enum: Value of c is " + c);
console.log("Enum: Name of c is " + Color[c]);
//any
var notSure = 4;
notSure = "maybe i'm a string";
console.log("Value is a string: " + notSure);
notSure = false;
console.log("I am a boolean: ", notSure);
//any array
var anyArrayList = [1, true, "false"];
for (var i = 0; i < anyArrayList.length; i++)
    console.log("Before: entry: ", (i + 1), " is ", [i]);
anyArrayList[1] = 100;
for (var i = 0; i < anyArrayList.length; i++) {
    console.log("After: Entry ", (i + 1), " is ", anyArrayList);
}
