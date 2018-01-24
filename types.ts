//boolean 
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);

//number
let num1: number = 6;
console.log("Value assigned to num1 is " + num1);

//string
let color: string = "blue";
console.log("Value assigned to color is " + color);

//array
let list: number[] = [1,2,3];
for (let i = 0; i < list.length; i++){
    console.log("Number " + (i+1) + " is: " + list[i] + ".");
}

//tuple
let x: [string, number] = ["hello", 10];
console.log("Tuple example: " + x[0].substr(1));

//enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
let c: Color = Color.Green;
console.log("Enum: Value of colorName is " + colorName);
console.log("Enum: Value of c is " + c);
console.log("Enum: Name of c is " + Color[c]);

//any
let notSure: any = 4;
notSure = "maybe i'm a string";
console.log("Value is a string: " + notSure);

