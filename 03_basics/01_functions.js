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

function addTwoNumbers(number1,number2)
{
    // let result = number1 + number2
    // return result

    return number1+number2
    console.log("harish")  // this line will never executed as ye return value k baad likha gya hai
}
const result =addTwoNumbers(3,4) // 3 and 4 are called as arguments which are passing value in the function

console.log("Result :", result)



function loginUserMessage(username)
{
    if(username===undefined)  
        // if(!username){}
    {
        console.log("Please,Enter a username")
        return
    }
 return `${username},Just Logged In`
}

console.log(loginUserMessage("Harish"))
console.log(loginUserMessage())  //Important, undefined aayega because humne koi argument pass hi nhi kiya function me 
