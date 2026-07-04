// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = 3
const month = "march"
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    // case 3:
    case "march":
        console.log("March")
        break;
    // using the break is must as if we not use this then iske baad ke saare cases 
    // bina check kiye hi run ho jayege except default
    case 4:
        console.log("April")
        break;

    default:
        console.log("Enter a month from 1 to 4")
        break;
}