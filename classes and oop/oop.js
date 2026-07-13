// Object literal
// An object literal is the simplest way to create an object in JavaScript using curly braces {}.

const user = {
    username: "Harish",
    loginCount: 9,
    signedIn: true,
    getUserdetails: function () {
        console.log("Got the user details");
        console.log(`Username : ${this.username}`) // IMPORTANT, this refer to the current context which is object user
        console.log(this); // poora object aayega iss this me 
    },
}
// console.log(user);
// console.log(user.getUserdetails());

// console.log(this); // empty parenthesis means current context me bhi kuchh nhi hai


//code constructor function :-Constructor ek special function hota hai jiska kaam objects create aur initialize karna hota hai.
function User(username, loginCount, isLoggedIn) {
    this.username = username // this.username is a variable and in RHS username is assigned to the variable in LHS
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome, ${this.username}`);

    }
    return this // object return ho gya and if ye return nhi krege to by default return ho jaata hai constructor function me
}

// constructor call :- new keyword lagane se function call constructor call ban jaati hai
const user1 = new User("Harish", 12, true) // new keyword use krne se vo ek new object banata and this uss object ko refer krne lagta hai
const user2 = new User("abcd", 14, false) // agar hum inme new use nhi krege to user2 values overwrite kr dega user1 ki 
console.log(user1);
console.log(user2);
console.log(user1.constructor);


