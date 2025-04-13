
const a = await fetch('http://127.0.0.1:5500/')
let response = await a.text();
  
console.log(response);
