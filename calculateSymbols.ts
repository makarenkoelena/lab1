function calculateSymbols(str: string):number{
    let num: number = str.length;
    return num;
}
console.log("Number of symbols is: " + calculateSymbols("Hello world!"));


function calculateSymbols_noSpaces(str:string):number{
    let num: number = str.replace(/\s+/, "").length;
    return num;
}
console.log(" Number of symbols with spaces not included: ", calculateSymbols_noSpaces("Hello world!"));