// Date and Time 

let date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString())

console.log(typeof date);

// let myCreatedDate = new Date(2023, 11, 23, 24, 3, 4)
let myCreatedDate = new Date("01-15-2006")
console.log(myCreatedDate.toDateString())

let TimeStamp = Date.now()

// console.log(TimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);


newDate.toLocaleString('default',{
    weekday: "long",   
})









