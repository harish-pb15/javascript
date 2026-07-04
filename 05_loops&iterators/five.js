const coding = ["js", "ruby", "cpp", "python", "java"]
//forEach() is an array method used to execute a function once for every element of an array.

coding.forEach(function (item) {  // ye call back function hai to iska name nhi hota
    console.log(item)
})

// we can also use the arrow function

coding.forEach((item) => {
    console.log(item)
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe) // only name dena hai function ka , execute ni krna means printMe() nhi likhna

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]


myCoding.forEach((item) => {
    console.log(item.languageName)      //item here is object
    console.log(item.languageFileName)      //item here is object

})