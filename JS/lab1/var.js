"use strict";
function calculateSymbols(str) {
    var num = str.length;
    return num;
}
function calculateSymbols_noSpaces(str) {
    var num = str.replace(/\s+/, "").length;
    return num;
}
console.log(calculateSymbols("test 1"));
console.log(calculateSymbols_noSpaces("test 1"));
var myFunction;
myFunction = calculateSymbols;
console.log(myFunction("test 1"));
myFunction = calculateSymbols_noSpaces;
console.log(myFunction("test 1"));
