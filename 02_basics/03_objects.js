//singleton
// Object.create

//object literals

const mySym = Symbol("key1")
const user ={
    name : "Harish",
    "full name" : "Harish Pareek",
    [mySym]:"mykey1",  // syntax to use symbol in object
    age: 20,
    location:"Abohar",
    email : "abc@gmail.com",
    isLoggedin : false ,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(user.email)
console.log(user["email"])

console.log(user["full name"])
console.log(user[mySym])

// changing the values in the object
user.email = "harish@gmail.com"

// freezing the object means object ko lock kr dena , kisi value ko change, edit ya delete nhi kr skte
// Object.freeze(user) 

user.email = "harish123@gmail.com" // object freeze k baad me change kiya hai to change apply nhi hoga 
console.log(user)

user.greeting = function()
{
    console.log("hello user")
}
user.greetingTwo = function()
{
    console.log(`hello user,${this["full name"]}`)
}

console.log(user.greeting());
console.log(user.greetingTwo())