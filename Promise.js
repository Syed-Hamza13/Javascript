// // fetch('https://something.com').then().catch()

// const promisOne = new Promise(function(resolve, reject){
//     //Do an async task 
//     // DB calls, cyrptography, network
//     setTimeout(function(){
//         console.log("Async Task is Completed");
//         resolve()

//     }, 3000)
// })

// promisOne.then(function(){
//     console.log("promise Consumed");

// })

// console.log("hello");

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     }, 3000)
// }).then(function(){
//     console.log("Async 2 resolved");

// })

// const PromiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 3000)
// })

// PromiseThree.then(function(user){
//     console.log(user);

// })

const PromiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "hamza", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})

PromiseFour.then((user) => {
    console.log(user);
    return user.username;

}).then((username) => {
    console.log(username)
}).catch(function (error) {
    console.log(error);

}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "12432" })
        } else {
            reject('ERROR JS went wrong')
        }
    }, 2000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)

    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(typeof response);
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
    
    
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return  response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))