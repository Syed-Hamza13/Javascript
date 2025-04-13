
const naame = "hamza "
const repoCount = 50

console.log(naame + repoCount + " value");

console.log(`hello my name is ${naame} and my repo count is ${repoCount}`);

const gameName = new String("Dragon-King-adventure")

console.log(gameName.__proto__);
console.log(gameName.trim());
// console.log(gameName.repeat());
gameName.toUpperCase();

console.log(gameName.charAt(2));
console.log(gameName.indexOf("n"));

const newString = gameName.substring(0,gameName.indexOf("n")+1)
console.log(newString);

const anotherString = gameName.slice(-1)
console.log(anotherString);

const newStringOne = "     dragon     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https//hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20", "-"));


console.log(url.includes("Hitesh"));

console.log(gameName.split("-"));
console.log(gameName.normalize("NFC"));











