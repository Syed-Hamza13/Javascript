"use strict"; // treat all JS code as newer version

// alert(3+3)

console.log(3+3);
console.log(3+2);

let name = "syed hamza"
let age = 20
let isLoggedIn = false
let state = null;

console.log(state);


// number => 2 to power 53
// bigint 
//string => " " and ' '
// boolean => true/false
// null => standalone value
//undefined =>
// symbol => unique
// object => 

console.log(typeof state)
console.log(typeof undefined)


// Datatype conversion
console.log("Datatype Convertion in interger -------------------");

let score = false // assign diiferent values of different datatypes to check conversion

console.log("before conversion ------------");

console.log(score);

console.log(typeof score);

let valueInNumber = Number(score)  // converting into Number 

console.log("After conversion ------------");


console.log(valueInNumber);
console.log(typeof valueInNumber);

console.log("convertion in boolean -----------");

let isLogged = 0 // assign different values to check conversion

console.log("before conversion ------------");
console.log(isLogged);
console.log(typeof isLogged);

let booleanIsLogged = Boolean(isLogged) // converting into boolean 

console.log("After conversion --------------");
console.log(booleanIsLogged)
console.log(typeof booleanIsLogged)

// 1 => true,   0 => false

// convertion into String -------

let someNumber = 58794 // assign different values to check conversion

console.log("before conversion ------------");
console.log(someNumber);
console.log(typeof someNumber);


let stringNumber = String(someNumber) // converting into string

console.log("After conversion --------------");
console.log(stringNumber)
console.log(typeof stringNumber)


