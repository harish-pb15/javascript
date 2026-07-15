//ES6
//Class ka use ek hi type ke bahut saare objects easily create karne ke liye hota hai.
class User {
    //Class ke andar functions ko methods kehte hain.
    constructor(username, email, password) { //constructor() ek special method hai jo object banne par automatically call hota hai.
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {  // ye hum ek method add kr rhe hai isme jo bina class ke User.prototype.encryptPassword se banta tha 
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("abc", "abc@gmail.com", 12345678)
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene 

function User2(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User2.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User2("tea", "tea@gmail.com", 7654321)

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
