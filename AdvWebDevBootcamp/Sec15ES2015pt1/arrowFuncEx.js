/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/

// refactor solution (problem 1):
var tripleAndFilter = arr => arr.map(val => val * 3).filter(num => num % 5 === 0);

// testing tripleAndFilter
console.log("tripleAndFilter([5, 7, 10, 11]):", tripleAndFilter([5, 7, 10, 11]));


/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/

// refactor solution (problem 2):
var doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);

// testing doubleOddNumbers
console.log("doubleOddNumbers([5, 7, 10, 11]):", doubleOddNumbers([5, 7, 10, 11]));


/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

// refactor solution (problem 3):
var mapFilterAndReduce = arr => arr.map(val => val.firstName)
    .filter(val => val.length < 5)
    .reduce((acc,next) => {
        acc[next] = next.length;
        return acc;
    }, {});

var nameArray = [
        {firstName: 'Brian',
        lastName: 'Boitano'},
        {firstName: 'Nancy',
        lastName: 'Kerrigan'},
        {firstName: 'Colt',
        lastName: 'Steele'},
        {firstName: 'Elie',
        lastName: 'Schoppik'}
    ];

// testing doubleOddNumbers
console.log("mapFilterAndReduce(nameArray):", mapFilterAndReduce(nameArray));


/* 4 - Write a function called createStudentObj which accepts two parameters, 
firstName and lastName and returns an object with the keys of firstName and 
lastName with the values as the parameters passed to the function. */

var createStudentObj = (firstName, lastName) => {
    var studentObj = {
        firstName: firstName,
        lastName: lastName
    };
    return studentObj;
};

console.log("createStudentObj('Elie','Schoppik'):", createStudentObj('Elie','Schoppik'));


/* 5 - Given the following code: 
Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
    
    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }
*/

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(() => {
      console.log('Hello ' + this.firstName);
    },1000);
  }
};

// testing sayHi
console.log(instructor.sayHi());