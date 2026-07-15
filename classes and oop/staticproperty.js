class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username : ${this.username}`);
    }
    static createId() {  //static is used to create properties or methods that belong to the class itself, not to its objects (instances).
        return `123`
    }
}

const harish = new User("harish")
// console.log(harish.createId()); 

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com")
iphone.logMe()
console.log(iphone.createId()); // will gove error  as createId me static use kiya hai to sirf User hi iss ko use kr skta hai or koi nhi kr skta 
