const score = 400 // JS automatically score ko number datattype de dega but we can do it manually
console.log(score)
const balance = new Number(100)  // specially number type define kar dia hai 
console.log(balance);

console.log(balance.toString()); //toString() kisi number ko string me convert karta hai.
console.log(balance.toString().length) // as the number is now converted to string therefore we can use the string properties here 

console.log(balance.toFixed(2)); //toFixed(n) number ko fixed decimal places tak format karta hai aur string return karta hai

const otherNumber = 23.82684
// const otherNumber =1234.67344
console.log(otherNumber.toPrecision(3));//toPrecision(n) number ko total n significant digits (meaningful digits) tak format karta hai.

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //toLocaleString('en-IN') number ko Indian number format me convert karke string return karta hai


// *******************MATHS*****************

console.log(Math);

console.log(Math.abs(-4)); // Used to convert into absolute values 
console.log(Math.round(9.345)); // Used to round off to the nearest integer 
console.log(Math.ceil(9.345)); // round off to top value means next value
console.log(Math.floor(7.8));// round off to bottom value means chhote number me round off kr degi ye jaise 3.4 hai to 3 aayega round off hokar 
console.log(Math.min(4, 3, 6, 8, 9));
console.log(Math.max(4, 3, 6, 8, 9));

console.log(Math.random());  // It's values always lies between 0(inclusive) and 1(exclusive)
console.log((Math.random() * 10) + 1);  // minimum value is 1 and max value is 10.999....


const min = 10
const max = 20 

console.log(Math.random() * (max - min + 1) + min); // IMPORTANT  formula to generate a random value between given range 

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // always gives a integer random number rounded off to floor