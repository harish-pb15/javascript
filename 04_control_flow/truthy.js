const userEmail = "abc@gmail.com"

if (userEmail) {
    console.log("Got user email")
}
else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
// "0", 'false'," ",[],{},function(){}

//checking for empty array
const Myarray = []

if (Myarray.length === 0) {
    console.log("Array is empty");
}


// checking for empty object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined 
//The Nullish Coalescing Operator (??) in JavaScript returns the right-hand value only if the left-hand value is null or undefined.
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
var1 = undefined ?? 15
console.log(val1);
console.log(var1);

let val2
val2 = null ?? 10 ?? 20
console.log(val2);


// Ternary Operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

