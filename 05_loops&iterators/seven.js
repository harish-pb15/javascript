const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map((num) => num + 10)
console.log(newNums);
//Yahan map() ek array method hai jo array ke har element par callback function chalata hai aur uske returned value se ek naya array banata hai.

// map() = Change every element. return new value 
// filter() = Keep only the elements that match a condition. return true or false 

//chaining : means using more than one map or filter
const newNumbers = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1) // isme jo num hai vo pichhle map ka return value hoga means 1,2,3... nhi honge balki 10,20,30... honge 
    .filter((num) => num >= 40)
console.log(newNumbers);
