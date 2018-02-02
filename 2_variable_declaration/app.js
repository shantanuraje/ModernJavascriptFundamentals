// var, let, const

var varName = 'John Doe';
console.log(varName);
varName = 'Steve Smith';
console.log(varName);

// Init var
var greeting;
console.log(greeting); //logs undefined
greeting = 'Hello';
console.log(greeting); //logs hello

// allowed - letters, number, $, _
// cannot start with number

// multiword var - conventions
var firstName = 'John'; // camel case (recommended)
var first_name = 'Sara'; // underscore
var FirstName = 'Steve'; // pascal case (recommended for classes, construtors)
var firstname = 'Tom'; // not recommended

//LET - works same as var
let letName = 'John Doe';
console.log(letName);
letName = 'Steve Smith';
console.log(letName);

//CONST - cannot change
const constName = 'Sara';
console.log(constName);
constName = 'John'; // throws error