function Myname() {
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("H");
}

// Myname()  // function execution

// function addTwoNumbers(number1, number2) { // number1 and number2 are parameters which are at the time of defining the function
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
    console.log("harish")  // this line will never executed as ye return value k baad likha gya hai
}
const result = addTwoNumbers(3, 4) // 3 and 4 are called as arguments which are passing value in the function

console.log("Result :", result)



function loginUserMessage(username) {
    if (username === undefined)
    // if(!username){}
    {
        console.log("Please,Enter a username")
        return
    }
    return `${username},Just Logged In`
}

console.log(loginUserMessage("Harish"))
console.log(loginUserMessage())  //Important, undefined aayega because humne koi argument pass hi nhi kiya function me 


function calculateCartPrice(...num1) // here ...num1 is rest operator and used to return or use multiple values in single array
{
    return num1
}
console.log(calculateCartPrice(2, 4, 6, 8, 10));


function calculateCartPrice2(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice2(2, 4, 6, 8, 10)); // yaha pe 6,8,10 aayega output as 2 and 4 val1 and val2 me assign ho gye 


const user =
{
    username: "Harish",
    price: 200
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

// we can also manually pass the values of object elements in function
handleObject({ username: "abc",
    price :4001
 })

 const myNewArray = [200,400,600,800]

 function returnSecondvalue(getArray)
 {
return getArray[1]
 }
 console.log(returnSecondvalue(myNewArray))