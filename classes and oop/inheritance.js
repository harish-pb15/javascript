class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// extends JavaScript me inheritance ke liye use hota hai.Iska matlab:
// Ek class doosri class ki properties aur methods ko inherit (reuse) kar sakti hai.
class Teacher extends User {  // means teacher class ko ab User class ke method or property mil gye hai, means Teacher is a child of User
    constructor(username, email, password) {
        super(username)  //super() parent (base) class ke constructor ko call karta hai.
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", 123456)

chai.addCourse()

const t1 = new User("t1")
t1.logMe()


console.log(chai === t1); //false

//instanceof checks whether an object is an instance of a particular class or constructor function.
//Instance = Class ya Constructor Function se bana hua actual object.
console.log(chai instanceof User); // true
