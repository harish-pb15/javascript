let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueinNumber = Number(score)
console.log(typeof valueinNumber);
console.log(valueinNumber)
// 👉 NaN = “ye number banne ki koshish thi, par fail ho gaya”
// NaN means Not a Number but iska type Number hi hai
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


// ********** OPERATIONS ******************** 

let value = 3;
let negValue = -value
// console.log(negValue)

// Some other operation includes mathematical operations like add, subtract,multiply,divide,modulus etc.

let str1 = "hello "
let str2 = "brother"
let str3 = str1 + str2 // this will simply add str1 and str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2")

console.log("1" + 2 + 2);
//JS evaluates expressions left to right and Once string appears, everything after becomes string behavior
console.log(1 + 2 + "2" + 2 + 2);

console.log(+true) // + will convert true to a number 

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter)