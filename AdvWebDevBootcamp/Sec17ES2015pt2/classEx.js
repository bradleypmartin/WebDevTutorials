// 1 - Create a class for a Person. 
// Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

// 2 - create an instance function that multiplies a single parameter by that Person's
// favoriteNumber.

class Person{
    constructor(firstName, lastName, favoriteColor, favoriteNumber){
        this.firstName = firstName,
        this.lastName = lastName,
        this.favoriteColor = favoriteColor,
        this.favoriteNumber = favoriteNumber;
    }
    multiplyFavoriteNumber(num){
        return num*this.favoriteNumber;
    }
}

var brad = new Person('Brad', 'Martin', 'teal', 17);

// testing Person functionality
console.log("What is 4 times Brad's favorite number (17)? Ans:", brad.multiplyFavoriteNumber(4));

