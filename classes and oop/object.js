function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2 //JavaScript me functions bhi objects hote hain, isliye unke andar properties add ki ja sakti hain.

console.log(multiplyBy5(5));
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype);

// not everything in JavaScript is an object.
// Primitive (Not Objects)
// Number
// String
// Boolean
// Null
// Undefined
// Symbol
// BigInt
// Non-Primitive (Objects)
// Object
// Array (Special Object)
// Function (Special Callable Object)
// Date
// RegExp
// Important Points
// Primitives can use methods because of Autoboxing (JavaScript creates a temporary wrapper object).
// typeof null returns "object" due to a historical bug, but null is not an object.


function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () { // means we are injecting increment property to createUser which we can use further
    this.score++ // means current context ka value increase krega 
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

const abc = new createUser("chai", 25)   // new is very important here as new likhne se JS ek naya object banati hai , then prototype link hota hai, this ko us object se bind krta hai and then object return krta hai
const tea = new createUser("tea", 250)

abc.increment() // means this = abc , and this.score++ means abc.score++ ho jaayega
abc.printMe()
