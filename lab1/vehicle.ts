class Vehicle{
    engine: string;
    year: number;
    seats: number;

    constructor(year: number, engine: string, seats: number)
    {
        this.engine = engine;
        this.seats = seats;
        this.year = year;
    }
}

let myCar = new Vehicle(2010, "bla bla bla", 5);
console.log(" car number of seats ", myCar.seats);

class Car extends Vehicle {
    model: string;
    constructor(year: number, engine: string, seats: number, model: string){
        super(year, engine, seats);
        this.model = model;
    }
}

let car1 = new Car(201, "bla bla bla", 5, "golf");
console.log(car1); 
