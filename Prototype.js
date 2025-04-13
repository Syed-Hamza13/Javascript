// function multiplyBy5(num){
//     return num*5
// }

// multiplyBy5.power = 6
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

// function createUser(username, score){
//     this.username = username;
//     this.score = score;

// }

// createUser.prototype.increment = function(){
//     this.score++
//     return this.score
// }

// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`)
// }

// const chai = new createUser("chai", 25)
// const tea = new createUser("tea", 250)

// console.log(chai.increment())

// -------------------------- Prototype 
let myName = "Hamza"

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hamza = function(){
    console.log("hamza is present in all object");
    
}

// heroPower.hamza()

Array.prototype.heyHamza = function(){
    console.log("hello");
    
}
// myHeroes.heyHamza()
// heroPower.heyHamza()


// inheritance 

const user = {
    name: "Chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true,

}

const TeachingSupport = {
    isAvailable: true,
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// console.log(TASupport.isAvailable);


Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport.makeVideo);

let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`)
    
}

anotherUsername.trueLength()

"hitesh".trueLength()
"iceTsea".trueLength()
