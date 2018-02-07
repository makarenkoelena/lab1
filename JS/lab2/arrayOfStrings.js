"use strict";
var colors = ["red", "green", "yellow"];
//let names: Array<string> = ["Tom", "Bob", "Alice"];
//console.log(names[1]);  // Bob
function addTask(task) {
    var newArray;
    newArray = colors.concat(task);
    var numOfElements;
    numOfElements = newArray.length;
    return numOfElements;
}
console.log(addTask("black"));
