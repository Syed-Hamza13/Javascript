
// -------------------- numbers ---------------
const score = 400
const balance = new Number(300)
console.log(balance)

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4));

const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toExponential(4));


// -------------------------- Maths ----------------

console.log(Math);
console.log(Math.abs(-4))

console.log(Math.round(4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(5.9));

console.log(Math.sqrt(256))
console.log(Math.min(256, 4, 23, 87, 9, 87, 0.88, 78, 360, 87, ))
console.log(Math.max(256, 4, 23, 87, 9, 87, 0.88, 78, 360, 87, ))

console.log(Math.floor(Math.random()*10) + 1);
console.log((Math.random()*10) + 1);

const min = 20
const max = 30 

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Important Formula 

