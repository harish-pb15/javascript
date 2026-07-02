const name = "Harish "
const repocount = 50
// console.log(name + repcount + " value") // This is the old way and not much used
console.log(`Hello, my name is ${name} and my repo count is ${repocount} `); // jaha par variable fill krna hai vaha par ${} laga dege 

const gameName = new String('Cricket-25') // ye object ban gya gameName and key -pair form me store hoga 

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2))
console.log(gameName.indexOf('e'))

const newString = gameName.substring(0, 4) // 0 index is included but 4 index is not included 
console.log(newString);

const anotherString = gameName.slice(-8, 4) // -8 is included and 4 is excluded
console.log(anotherString);
// c r i c k e t - 2 5 
// 0 1 2 3 4 5 6 7 8 9   --> simple indexing
//-10 -9 ......    -2 -1  --> negative indexing jo ki last se shuru hoti hai 
// -8 =i and 3=c issi liye ic print hoga 

//    TRIM
const newStringOne = "      harish      "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim() string ke starting aur ending spaces (whitespaces) ko remove karta hai.

//   REPLACE
const url = "https://harish.com/harish%20choudhary"
console.log(url.replace('%20', '-')) // replace ne %20 ko - se replace kr dia


// INCLUDES :includes() check karta hai ki string ke andar koi specific text present hai ya nahi.
console.log(url.includes('abc'))

// split : split() string ko parts me todkar array me convert karta hai.
console.log(gameName.split('-')); // '-' jaha bhi hai vaha vaha se ye string split ho jaayegi and arrays me covert ho jaayegi