// for of 

const arr = [1, 2, 3, 4, 5]
for (const num of arr) { // of ke baad jispe loop lagana hai usko likhte hai
    console.log(num)
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(greet)
}


// MAPS

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('CN', "Canada")
map.set('IN', "India") // Map me duplication nhi hota 

console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject =
{
    'Game1' : 'PUBG',
    'Game2' : 'FreeFire'
}

// for (const [key,value] of myObject) {
//     console.log(key,value);
// }
// this is not applicable on object as object is not iterable by this method
