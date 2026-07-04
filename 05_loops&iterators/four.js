const myObject =
{
    js: 'JavaScript',
    cpp: 'C++',
    Py: 'Python'
}

// Method to iterate object
// for in loop

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key)// for in loop me aisa krne se keys print hogi , for of loop me values hoti thi
}


const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('CN', "Canada")
map.set('IN', "India")


// for in loop se map ko iterate nhi kr skte
for (const key in map) {
    console.log(key)
}