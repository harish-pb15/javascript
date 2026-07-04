//for

for (let index = 0; index < 10; index++) {
    const element = index
    if (element == 5) {
        console.log("5 is the best number ");
    }
    console.log(element);
}

for (let i = 0; i < 10; i++) {
    console.log(`Outer Loop value : ${i}`)
    for (let j = 0; j < 10; j++) {
        console.log(i + '*' + j + '=' + i * j)
    }
}

let Myarray = ["abc", "xyz", "jkl"]
console.log(Myarray.length)
for (let i = 0; i < Myarray.length; i++) {
    const element = Myarray[i];
    console.log(element);
}



// break and continue

for (let i = 1; i < 20; i++) {
    if (i == 5) {
        console.log("5 is detected ")
        break
    }
    console.log(`The value of i is ${i}`);

}

for (let i = 1; i < 10; i++) {
    if (i == 5) {
        console.log("5 is detected ")
        continue
    }
    console.log(`The value of i is ${i}`);

}
