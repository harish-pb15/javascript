class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    // Getter(get) → Property ki value lene(read) ke liye.
    // Setter(set) → Property ki value set/change karne ke liye.

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
    get password() {
        return `${this._password}hitesh`
    }

    set password(value) {
        this._password = value.toUpperCase()
    }
}

const hitesh = new User("abc@gmail.com", "1abchuvd5")
console.log(hitesh.password);
console.log(hitesh.email);

// console.log(hitesh.password) likhne par JavaScript check karti hai ki password property
//  par getter hai ya nahi.Kyunki hum value read kar rahe hain, isliye getter call hota hai.Setter pehle hi constructor me
// this.password = password wali line execute hone par call ho chuka hota hai, jo value ko _password me store karta hai. 
//   Getter phir _password ki value return karta hai, aur console.log() usse print kar deta hai.