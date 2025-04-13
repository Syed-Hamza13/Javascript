// for loop 
for (let index = 0; index < 10; index++) {
    if(index == 5){
       // console.log("5 is best ");
    }
    // console.log(index);
}

for(let i = 1; i <= 10; i++){
    // console.log(`Table of  ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j}`);
        // console.log(`${i} * ${j} = ${i * j}`);
        
    }
}


// for(let i = 1; i <= 10; i++){
//     // console.log(`Table of  ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value ${j}`);
//         // console.log(`${i} * ${j} = ${i * j}`);
//         console.log("%"); 
    
//     }
// }


// let myArray = ["flash", "batman", 'superman']

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);    
// }

// break and continue

// for (let index = 0; index <= 20; index++) {

//     if (index == 5){
//         console.log("detected 5");
//         break
//     }
//     console.log(`value of i is ${index}`); 
// }


// for (let index = 0; index <= 20; index++) {

//     if (index == 5){
//         console.log("detected 5");
//         continue;
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

// let i = 0
// while (i <= 10) {
//     console.log(`Value of i is ${i}`);
//     i++
// }

let arr = 0 
let myArray = ["batman", "superman", "flash", "hulk"]
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++
}


let score = 11
do{
    console.log(`Score is ${score}`);
    score++
}while(score <= 10)