
// const isUserLoggedIn = true
// const temperature = 891
// if (temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("greater than 50");
    
// }

// const score = 200
// if(score > 100){
//     const power = "Fly"
//     console.log(`User power: ${power}`)
// }


// const balance = 1000

// if (balance > 500) console.log("test")

// if (balance < 500){
//     console.log("less than"); 
// }else if (balance < 750){
//     console.log("less than 750");
    
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
    
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true
// if (userLoggedIn && debitCard && 2==3){
//     console.log("allow to buy courses");
// }

// if (loggedInFromEmail || loggedInFromGoogle){
//     console.log("user logged in ");
    
// }

// ------------------ Switch Case ----------------------------

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month = 2
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         // break;
//     case 3:
//         console.log("march");
//         // break;
//     case 4:
//         console.log("april");
//         // break;
//     case 5:
//         console.log("may");
//         // break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;

//     default:
//         console.log("default case match");
        
//         break;
// }

//------------------------ truthy values

// const userEmail = []

// if(userEmail){
//     console.log("got user email");
// }else{
//     console.log("dont have user email");
    
// }

// falsy Values
//    false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values
//    "0", 'false', " ", [], {}, function(){}, 

// if (userEmail.length === 0){
//     console.log("Array is empty");
    
// }


// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("empty object ");
    
// }



// Nullish Coalescing operator (??):        null undefined

let val1;
// val1 = 5 ?? 10 
// val1 = undefined ?? null
val1 = null ?? 43 ?? 54


console.log(val1);

// Ternary Operator 
// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("more than 80") : console.log("less than 80");
 

