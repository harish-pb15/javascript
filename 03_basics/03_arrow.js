const user =
{
    username: "Harish",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`)
        console.log(this) // this here refers to the current context which is ki ye us object ko refer karta hai jis object ne function ko call kiya hai
    }
}

user.welcomeMessage()   // this = user 
user.username = "abcd"
user.welcomeMessage() // this = user 

console.log(this) // this = global scope


// function chai()
// {
//     let username ="harish " 
//     console.log(this);
// }
// chai()

// const chai = function () {
//     let username = "harish"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "harish"
    console.log(this);
}
// chai()


// ***********ARROW FUNCTION**************
// Arrow Function (=>) JavaScript me function likhne ka ek short aur modern syntax hai.

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Arrow function with implicit return 
// const addTwo = (num1, num2) => num1 + num2
// OR
const addTwo = (num1, num2) => (num1 + num2)

const ans = addTwo(63, 73);
console.log(ans)


// returning object in the function
const addTwo = (num1, num2) => ({ username: "harish" }) // to return a object , hume parenthesis() lagane padege 
console.log(addTwo(3, 4))

