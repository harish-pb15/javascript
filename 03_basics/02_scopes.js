// video 21

let a = 300
if (true) {
    let a = 10
    var c = 20 // var ko hum use ni krte as isko agar local scope me declare kia to bhi hum isko local scope ke baahar use kr skte hai
    const b = 30
    console.log("Inner :", a);
}

console.log(a)
// console.log(b)
console.log(c)


// NESTED SCOPES

function one() {
    const username = "Harish"
    function two() {
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website);
    // two()
}
one() //jab one ko call kr rhe hai to uske andar ka two nhi chalega as two ko define to kr dia hai par usko call nhi kra humne 

if (true) {
    const username = "Harish"
    if ((username == "Harish")) {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //out of its scope therefore error aayega
}
// console.log(username) //out of its scope therefore error aayega


// ****************** Interesting **********************

console.log(addOne(5)) // addOne function ko hum yaha call kr skte hai as usko define kiya hai vo dekho

function addOne(value) {
    return value + 1
}

// console.log(addTwo(5));    //addTwo ko hum uske define krne se pehle call nhi kr  sakte hai Kyuki addTwo ek const variable hai jisme baad me function assign ho raha hai.
//*** Memory me JS isko aise samjhti hai---->***
// const addTwo;      // Memory reserve hoti hai, lekin initialize nahi hota
// addTwo = function(num) {
//     return num + 2;
// };
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(5));
