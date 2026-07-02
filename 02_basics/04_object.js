// const user = new Object() // singleton object
const user = {}     // non-singleton object
// console.log(user)

user.id = "123abc"
user.name = "Harish"
user.isLoggedin = false

// console.log(user)

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harish",
            lastname: "Pareek"
        }
    }
}
console.log(regularUser.fullname);

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2, obj4) //Object.assign() is used to copy properties from one or more source objects into a target object
// Object.assign(target,sources)  ---=> syntax of Object.assign
console.log(obj3);

// spread method to combine/copy objects to new target object 
const obj5 = { ...obj1, ...obj2, ...obj4 } // no need to use empty {} for target object 
console.log(obj5);

const users = [
    {
        id: 1,
        email: "abc1@gmail.com"
    },
    {
        id: 2,
        email: "abc2@gmail.com"
    },
    {
        id: 3,
        email: "abc3@gmail.com"
    },
]
// the upwritten is the array of objects 
console.log(users[0].email);
// users[0] means 1st element yaani pehla object and then users[0].email means 1st object ki email

//IMPORTANT
console.log(Object.keys(user)) // object.keys will return an array of the keys of the object
console.log(Object.values(user)) // same as object keys, we can access to array of values of the object


console.log(Object.entries(user)) //Object.entries() converts an object into an array of key-value pairs.

//hasOwnProperty checks whether an object has a specific property as its own property, not one inherited from its prototype.
console.log(user.hasOwnProperty('isLoggedin'))