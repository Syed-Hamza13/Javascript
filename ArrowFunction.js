
// let a 
// const user = {
//     username: "hitesh",
//     price: 133,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
//     }
// }

// // user.welcomeMessage()
// user.username = "samuel"
// // user.welcomeMessage()

// // console.log(this)

// // function chai() {
// //     let username = "hamza"
// //     console.log(this)
// // }
// // chai()

// // const chai = function(){
// //     let username = "hamza"
// //     console.log(this.username);
    
// // }
// // chai()


// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
    
// }

// // chai()

// // const addTwo = (num1, num2) => {
// //     return num1 + num2
// // }

// // const addTwo = (num1, num2) => num1 + num2
// // const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => ({username: "hitesh"})


// // console.log(addTwo(45, 9));


// // ------------------- Immediately Invoked Function Expression   (IIFE)

(function cohhjde(){
    console.log(`DB CONNECTed`);
})();

( (name) => {
    console.log(`another DB connected ${name}`);
    
})("hamza")