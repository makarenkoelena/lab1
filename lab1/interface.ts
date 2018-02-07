export interface carInterface{
    year: number;
    seat: number;
    make: string;
    doors?:number;

    displayInfo():void;
}
import {carInterface} from "./interface"
import {doors} from "./doors"
class car implements carInterface{
    year: 1980;
    seat: 4;
    make: "Ford";
    doors?:doors.four;
    displayInfo(){return "this is a ford"};
    
    /*constructor(year: number, seat: number, make: string, doors:number){
        this.year = year;
        this.seat = seat;
        this.make = make;
        this.doors = doors;*/  
}
let ford = new car();
console.log(ford.displayInfo());