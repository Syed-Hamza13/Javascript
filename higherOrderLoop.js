// for of lool

const arr = [1, 2, 3, 4, 5]



for (const element of arr){
    // console.log(element); 
}

const greet = "hello world"
 for (const element of greet) {
    if (element === " ") {
        continue
    }
    // console.log(element);
    
 }

 // Maps
 const map = new Map()
 map.set('IN', "INDIA")
 map.set('IN', "india")
 map.set('USA', "UNITED States of America")
 map.set('FR', "France")
//  console.log(map);

for (const [element, value] of map) {
    // console.log(element, ':-', value);
}
 

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'GTA'
}

// console.log(myObject);

// for (const [key, value] of myObject) {
//     console.log(key, value);
// }


const Lang = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    sw: 'Swift',
    py: 'Python'
}

for (const key in Lang) {
    // console.log(Lang[key]);   
}

const programming = ["js", "rb", "py", "java", "cpp", "swift"]
for (const key in programming) {
    // console.log(programming[key]);
    
}

for (const key in map) {
    // console.log(key);
}

const coding = ["ruby", "java", "python", "cpp", "javascript", "swift", "basic", "pascal"]
// coding.forEach( function (item){
//     console.log(item);
    
// })

// coding.forEach((value) => {
//     console.log(value);
// })

function printME(item){
    console.log(item);
}

// coding.forEach(printME)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "j"
    },
]

myCoding.forEach((item) => {
    // console.log(item.languageName);
})

// const values = coding.forEach((item) => {
//     return item
// })

// console.log(values);


const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })


// const otherNums = []
// myNums.forEach((num) => {
//     if(num > 4){
//         otherNums.push(num)
//     }
// })
// console.log(otherNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((bk) => bk.genre === "Science")

const userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History" 
})
console.log(userBooks);



