class Person {
    name : string;
    age : number;
    address : string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
}

}
let p1 = new Person ("Lena", 26, "bjkkguyg");
console.log("Name of the person 1 is: ", p1.name);

