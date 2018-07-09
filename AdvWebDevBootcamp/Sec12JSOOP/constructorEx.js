// Part 1: creating a Person constructor function

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.multiplyFavoriteNumber = function(num){
        return this.favoriteNumber*num;
    }
}

// testing part 1
var brad = new Person('Brad', 'Martin', 'teal', 1337);

console.log("Brad's favorite number (1337) multiplied by 3:", brad.multiplyFavoriteNumber(3));

// Part 2: refactoring Child function
function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

// we can use call/apply here to 'borrow' some of the parent's class variables.
// NOTE: I wonder when this type of stuff is used over inheritance, and to what
//       extent inheritance is supported/taught in JS (I'm guessing we'll find out later)...
function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.apply(this,arguments);
}

// Testing out part 2 refactor

var myChild = new Child('Ima','Child','blue','pizza');

console.log("myChild's favorite food:",myChild.favoriteFood);
console.log("myChild's type:",typeof(myChild));