const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    return item
})
//forEach loop doesnot return any value ,so we cannot store it into another variable
console.log(values)


//filter :filter() is used to select elements that satisfy a condition and returns a new array.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4) // yaha apne aap return kr rha hai ye values ko
const newNums = myNums.filter((num) => {
    return num > 4  // but if we use the curly brackets {} and open the scope, then we have to return manually 
})

console.log(newNums)


// method to return selected values using forEach()
const myArray = []
myNums.forEach((item) => {
    if (item > 4) {
        myArray.push(item)
    }
})
console.log(myArray)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Sports', publish: 1982, edition: 2005 },
    { title: 'Book Three', genre: 'Movies', publish: 1983, edition: 2006 },
    { title: 'Book Four', genre: 'Fiction', publish: 1984, edition: 2007 },
    { title: 'Book Five', genre: 'Movies', publish: 1981, edition: 2008 },
    { title: 'Book Six', genre: 'Sports', publish: 1982, edition: 2009 },
    { title: 'Book Seven', genre: 'Sports', publish: 1983, edition: 2009 },
    { title: 'Book Eight', genre: 'Fiction', publish: 1985, edition: 2006 },
]

const myBooks = books.filter((bk) => bk.genre === 'Sports' && bk.edition >= 2006
)

console.log(myBooks)

