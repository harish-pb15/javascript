const IPL = ["RCB", "CSK", "MI"]
const cricketers = ["VK", "MSD", "RS"]

// push :- push will change the original array
IPL.push(cricketers) // poora cricketers array ek element ki tarah treat hua yaha pe
console.log(IPL);
console.log(IPL.length)

console.log(IPL[3][1]) // means 3rd index element ka bhi 1st index element

//concat: concat() → original array ko change nahi karta, naya array return karta hai. that's why new array me store krna padega isko taaki jo return ho vo usme store ho jaaye
const players = ["virat", "dhoni", "gill", "vaibhav"]
const substitute = ["rohit", "pant", "Iyer"]
const mix = players.concat(substitute)
console.log(mix)
console.log(mix.length)

//spread : Spread operator array ya object ke elements ko phaila (spread) deta hai.
const newArray = [...players, ...substitute]
console.log(newArray)

// flat : flat() nested arrays ko ek level ya multiple levels tak flatten (seedha) kar deta hai.
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anotherArray.flat(Infinity) // flat(level of nested array to be flatted )
console.log(real_another_array)

console.log(Array.isArray("Hitesh")) // Array.isArray() check karta hai ki jo value di gayi hai wo array hai ya nahi.
// from 
console.log(Array.from("Hitesh"))

//Important
console.log(Array.from({ name: "harish" })) // by default it will give an empty array 


let score1 = 100
let score2 = 200
let score3 = 300
 
//Array.of() diye gaye values se ek naya array banata hai.
console.log(Array.of(score1, score2, score3))
