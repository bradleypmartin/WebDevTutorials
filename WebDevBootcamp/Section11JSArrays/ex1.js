var numbers = [22, 67, 33, 96, 88];

// note this prints undefined to console (beyond defined elements)
console.log(numbers[numbers.length]);

var friendGroups = [
  ["Harry", "Ron", "Hermione"],
  ["Malfoy", "Crabbe", "Goyle"],
  ["Mooney", "Wormtail", "Prongs"]
];

// this next line should spit out "Mooney".
console.log(friendGroups[2][0]);
