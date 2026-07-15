const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI') //getOwnPropertyDescriptor() JavaScript ka ek method hai jo kisi object ki property ke baare me detailed information deta hai
console.log(descriptor);

console.log(Math.PI);

Math.PI = 5
console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log("chai nhi bani");

    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false //enumerable ka simple matlab hai:
    // Kya ye property loop (ginti/iteration) ke time dikhni chahiye ya nahi?
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

//
for (let [key, value] of Object.entries(chai)) { //Object.entries() kisi object ko array of key-value pairs me convert karta hai.
    if (typeof value != 'function') {
        console.log(`${key}: ${value}`);
    }
}
