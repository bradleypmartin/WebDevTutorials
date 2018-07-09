// Part 1-1: creating a Person constructor function
function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName =  lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
}

// Part 1-2: adding a function on Person.prototype called fullName
Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

// Testing part 1-2
var bradObj = new Person('Brad', 'Martin', 'teal', 17);
console.log("Testing fullName on bradObj. Result:",bradObj.fullName());

// Part 1-3: Adding family array (init to empty array) to Person (up above; done!)

// Part 1-4: Adding addToFamily to the Person prototype
Person.prototype.addToFamily = function(newFamilyMember){
    if(newFamilyMember instanceof Person){
        if(this.family.indexOf(newFamilyMember) === -1 && newFamilyMember instanceof Person){
            this.family.push(newFamilyMember);
        } else {
            console.log("Sorry; that family member has already been added!");
        }
        
    } else {
        console.log("Sorry; that person does not seem to be, well, a Person()!");
    }
    return this.family.length;
}

// Testing Part 1-4
var bruceObj = new Person('Bruce', 'Martin', 'green', '60');
bradObj.addToFamily(bruceObj)
console.log("Brad's current family:",bradObj.family);


// Part 2-1: implementing Array.prototype.map
Array.prototype.map = function(callback){
    var newArr = [];
    this.forEach(function(val, ind, arr){
        newArr.push(callback(val, ind, arr));
    });
    return newArr;
}

function triple(num){
    return num*3;
}

// testing part 2-1
var myArr = [1, 4, 2];
console.log("Initial array [1 4 2]; tripled array:", myArr.map(triple));
console.log("Initial array, recalled:", myArr);

// Part 2-2 Implementing reversal of string
String.prototype.reverse = function(){
    var strArr = this.split("");
    var newStr = "";
    for(var i = strArr.length-1; i >= 0; i--){
        newStr += strArr[i];
    }
    return newStr;
}

// testing part 2-2
console.log("Reversing string 'Mississippi':",'Mississippi'.reverse());