function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("Z");
    console.log("A");

}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
//     return number1 + number2    
// }
function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result

}

const result = addTwoNumbers(25, 5)
// console.log("result: ", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`

}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hello"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 3000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)

handleObject({
    username: "saadsm",
    price: 199
})

const myNewArray = [200, 300, 500, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 3500, 400, 500, 600, 700]));
