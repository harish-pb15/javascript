// if

const isUserLoggedIn = true
if (isUserLoggedIn) {

}
// comparision operators 
// <,>,<=,>=,==,!=,===
//=== is strict equal , both value and type must be same for true
const temperature = 42
if (temperature < 50) {
    console.log("Less than 50");
}
else {
    console.log("Greater than 50");
}

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power is ${power}`);
}

const balance = 1000

if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log("less than 750");
}
else {
    console.log("it is equal to 1000");
}

const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
if (isUserLoggedIn && debitCard) // && is used as and means all the conditions must be true 
{
    console.log("Allow to buy the course")
}

if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User logged in");
}
