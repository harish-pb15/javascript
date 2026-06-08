let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueinNumber = Number(score)
console.log(typeof valueinNumber);
console.log(valueinNumber)
// 👉 NaN = “ye number banne ki koshish thi, par fail ho gaya”
// NaN means Not a Number but iska type Nummber hi hai
// boolean ko convert krege means true ya false ka datatype change krege to true convert ho jaayega 1 me and false hoga 0 me

// let isLoggedIn = 1
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=> true; 0=>false
//""=> false
// "hitesh" => true

let someNumber = 13
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)