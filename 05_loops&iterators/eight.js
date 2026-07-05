const myNums = [1, 2, 3, 4, 5]

//reduce : reduce() ka use poori array ko reduce karke ek single value banane ke liye hota hai.
//*****SYNTAX*******/
// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);

const myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and currentValue : ${currentValue}`);

    return accumulator + currentValue
}, 0)

console.log(myTotal);

//using arrow operator
const Total = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(Total)

const shoppingCart = [
    {
        itemname: "JS Course",
        price: 1999
    },
    {
        itemname: "Dev course",
        price: 2999
    },
    {
        itemname: "Python course",
        price: 3999
    },
    {
        itemname: "APP course",
        price: 4999
    }
]

const PricetoPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) //item here is current value
console.log(PricetoPay);
