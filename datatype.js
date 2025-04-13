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

// *************************** Operations ************************

console.log("--------- Operations -----------");

let value = 3
let negvalue = -value;
console.log(negvalue);

// console.log(1%3);

console.log("1" + 2);
console.log(1 + "2");
console.log("2"+1);
console.log("hello" + " world")



console.log(1 + 2 + "2");

console.log(+true);
console.log(+false);

console.log("1" == 1);

console.log(1 > "2")

console.log(45 > 89);

const id = Symbol("234")
const otherid = Symbol("234")


console.log(id == otherid);


function world() {
    console.log("this is function named world");
    
}
world()
console.log(typeof id);
console.log(typeof otherid);




// stack and heap
// stack memory is used in (primitive data types)
// Heap memory is used in (Non - primitive data types)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hamza@google.com"
console.log(userOne)
console.log(userTwo)








