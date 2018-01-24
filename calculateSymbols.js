function calculateSymbols(str) {
    var num = str.length;
    return num;
}
console.log("Number of symbols is: " + calculateSymbols("Hello world!"));
function calculateSymbols_noSpaces(str) {
    var num = str.replace(/\s+/, "").length;
    return num;
}
console.log(" Number of symbols with spaces not included: ", calculateSymbols_noSpaces("Hello world!"));
