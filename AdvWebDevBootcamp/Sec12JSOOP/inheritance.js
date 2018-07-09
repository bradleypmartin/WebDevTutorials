// Part 1: creating constructor for a Vehicle class

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

// Part 2: adding a function 'start' to the Vehicle prototype

Vehicle.prototype.start = function(){
    return "VROOM!";
};

// Part 3: adding a concatentation-of-properties function to Vehicle prototype

Vehicle.prototype.toString = function(){
    return "The make, model, and year are " + this.make + " " + this.model + " " + this.year;
};

// testing parts 1-3
var myTractor = new Vehicle('Tractor','John Deere',1999);
console.log("Trying to start my tractor...");
console.log(myTractor.start());
console.log("Reporting info on my tractor...");
console.log(myTractor.toString());


// Part 4: creating Car class to inherit from more abstract Vehicle class

function Car(make, model, year){
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// testing part 4
var myCar = new Car('Chevrolet','Volt','2015');
console.log("How many wheels does my Volt have? Answer:", myCar.numWheels);
console.log("Trying to start my car...", myCar.start());
console.log("My car is a type of:", Car.prototype.constructor);

// Part 5: repeating part 4 for motorcycles.
function Motorcycle(make, model, year){
    Vehicle.apply(this, arguments);
    this.numWheels = 2;
};

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

