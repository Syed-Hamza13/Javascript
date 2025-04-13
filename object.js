// singleton

// object literals
// Object.create

const  mySym = Symbol("key1")
const JsUser = {
    name:"hitesh",
    "full name": "hitesh choudhary",
    [mySym] : "Mykey1",
    age: 26,
    location: "jaiput",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);


JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

const faceUser = new Object()

faceUser.id = "123abc"
faceUser.name = "Sammy"
faceUser.isLoggedIn = false

console.log(faceUser);

const regularObject = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularObject.fullname?.userfullname.lastname);

const obj1 = {
    1: "a", 
    2: "b"
}
const obj2 = {
    3: "c", 
    4: "d"
}
const obj4 = {
    5: "c", 
    6: "d"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "ab@gmail.com"
    },
    {
        id: 2,
        email: "ac@gmail.com"
    },
    {
        id: 3,
        email: "ad@gmail.com"
    },
    {
        id: 4,
        email: "ae@gmail.com"
    }
]

console.log(users[1].email);

console.log(faceUser);

console.log(Object.keys(faceUser));
console.log(Object.values(faceUser));
console.log(Object.entries(faceUser));
console.log(faceUser.hasOwnProperty('isLoggedOut'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sdfsdsd",
}

// course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name:" "hamza",
//     "coursename": "Python in 30 days",
//     "price": "free"
// }
