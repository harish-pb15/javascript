// arrays
// MUST read MDN array documentation

const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"]

console.log(myArr[0]);

const heroes = ["shaktiman", "hero"]
// another way to declare array
const myArr2 = new Array(1, 3, 5, 7,8,9,10,)

// ARRAY METHODS
//push
myArr2.push(9)
console.log(myArr2)

// pop
myArr2.pop()
console.log(myArr2)

//unshift : unshift() array ke starting (beginning) me element add karta hai.
myArr2.unshift(0)
console.log(myArr2)

//shift :shift() array ke starting (first element) ko remove karta hai.
myArr2.shift()
console.log(myArr2)

//includes : includes() check karta hai ki koi value array me maujood hai ya nahi. and returns boolean type 
console.log(myArr2.includes(5));

//indexof
console.log(myArr2.indexOf(1));
// console.log(myArr2.indexOf(15)); // it will return -1 as 15 is not present in the array

//join : join() array ke saare elements ko ek string me jod deta hai.
const newArr = myArr2.join()
console.log(newArr);
console.log(typeof newArr);


// slice , splice 

console.log("A", myArr2);
const mynewArr = myArr2.slice(1, 3) // 1 is includes and 3 is excluded 
console.log(mynewArr)

console.log("B", myArr2)

const mynewArr2 = myArr2.splice(1, 3)
console.log("C",myArr2)
console.log(mynewArr2)
// slice simply portion ki copy nikalta hai but splice uss portion ko remove kr deta hai 
// and original array ko bhi change kr deta hai, also splice me dono limits include hoti hai