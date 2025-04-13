const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNumbers.map((num) => num + 10)

// console.log(newNum);

const otherNums = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)

// console.log(otherNums);



const values = [1, 2, 3, 4]

const total = values.reduce((acc, curval) =>{
    console.log(`acc: ${acc} and curval: ${curval}`);
    
    return acc + curval
}, 0)

console.log(total);

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999,
    },
    {
        itemName: "Py Course",
        price: 1999,
    },
    {
        itemName: "Java Course",
        price: 3999,
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999,
    },
    {
        itemName: "Data Science Course",
        price: 12999,
    },
]

const TotalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(TotalPrice);


