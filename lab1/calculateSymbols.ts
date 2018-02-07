function calculateSymbols1(str: string):number{
    let num: number = str.length;
    return num;
}
console.log("Number of symbols is: " + calculateSymbols1("Hello world!"));


function calculateSymbols_noSpaces1(str:string):number{
    let num: number = str.replace(/\s+/, "").length;
    return num;
}
console.log("Number of symbols with spaces not included: ", calculateSymbols_noSpaces1("Hello world!"));