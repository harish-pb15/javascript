
/// watch video 44

function SetUsername(username) {
    //complex DB calls
    this.username = username
}

function createUser(username, email, pass) {
    // SetUsername(username)// ye call nhi hua 
    SetUsername.call(this, username) // 
    this.email = email
    this.pass = pass

}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
