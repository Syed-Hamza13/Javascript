// // Array

// const  myArr = [0, 1, 2, 3, 4, 5, 6]

// console.log(myArr);
// console.log(myArr[8]);

// const anotherArray = new Array(1, 3, 4, 5, 7, 2)
// console.log(anotherArray);

// const Heroes = ["captain america", "iron man", "hulk", "thor"]
// console.log(Heroes);

// // Array Methods --------------------

// myArr.push(87)
// myArr.push(8)
// console.log(myArr);

// myArr.pop()
// myArr.pop()
// console.log(myArr);

// myArr.unshift(56)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// // console.log(myArr.includes(3));
// // console.log(myArr.indexOf(96));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log("B ", myArr);
// console.log(myn1);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);



// more on arrays ------------------------

const marvel_heros = ["thor", "ironman", 'spiderman']
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const newHeros = marvel_heros.concat(dc_heros)
// console.log(newHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]

console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(2)

console.log(real_another_array);


console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name: "hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

