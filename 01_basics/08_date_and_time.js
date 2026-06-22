// dates

let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(typeof mydate);

// Month starts from 0 in JS 
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let newDate = new Date(2023, 9, 25, 4, 9, 6)
console.log(newDate.toLocaleString());

let anotherdate = new Date("2023-01-14")//string format of date YYYY/MM/DD

let date1 = new Date("01-14-2023") // MM/DD/YYYY
console.log(date1.toLocaleString())

let myTimeStamp = Date.now();
console.log(myTimeStamp)

console.log(date1.getTime())  // getTime() kisi Date object ka timestamp return karta hai, yani 1 January 1970 00:00:00 UTC se lekar ab tak kitne milliseconds hue hain.

console.log(Math.floor(Date.now() / 1000)); // divide by 1000 to convert milliseconds into seconds 

let newDate1 = new Date()
console.log(newDate1);
console.log(newDate1.getMonth());
console.log(newDate1.getDay()); // return day of week

newDate1.toLocaleString('default', { weekday: "long" })

console.log(newDate1) 