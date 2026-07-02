// JavaScript is a dynamically typed language. becuase A variable’s type is decided at runtime, not before running the program 

// # Primitive datatype 
// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100 //Number 
const scoreValue = 100.3 //Number 
const isLoggedIn = false  // Boolean 
const OutsideTemp = null //null
let userEmail; //undefined 

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid) // false aayega as Each call to Symbol() creates a new unique symbol,
const bigNumber = 3964519245763020424n

// # Reference/Non-Primitive datatype
// Array, Objects , Functions

const heroes = ["shaktiman", "naagraj", "abcd"] // ye ek ARRAY hai

let myObject = {
    name: "harish",    // ye myobject ek object hai and object data ko key pair me store krta hai jaise name - key and "harish" - value
    age: 20
}

const myFunction = function () {
    console.log("hello World ")
}
console.log(typeof myFunction)


// MEMORIES  (Video 10)
// Stack(Primitve), Heap(Non-Primitive)
let myYoutubeName = "Gaming channel"
let anothername = myYoutubeName
anothername = "technical guruji"
console.log(myYoutubeName)
console.log(anothername);


let user1 =
{
    email: "abc@gmail.com",
    upi: "user@ypl"
}
let user2 = user1       // Objects are non-primitive (reference) data types; assigning one object to another (user2 = user1) copies the reference (address), so both variables point to the same object and changes made through one are reflected in the other.

user2.email = "harish@gamil.com"
console.log(user1.email);
console.log(user2.email);
 