function calculateSymbols(str: string):number{
    let num: number = str.length;
    return num;
}

function calculateSymbols_noSpaces(str:string):number{
    let num: number = str.replace(/\s+/, "").length;
    return num;
}

console.log(calculateSymbols("test 1"));
console.log(calculateSymbols_noSpaces("test 1"));

let myFunction:(val1: string) => number;
myFunction = calculateSymbols;
console.log(myFunction("test 1"));

myFunction = calculateSymbols_noSpaces;
console.log(myFunction("test 1"));
