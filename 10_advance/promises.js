// Naya Promise create kiya aur promiseOne me store kiya.
const promiseOne = new Promise(function (resolve, reject) {

    // Asynchronous task perform ho raha hai.
    setTimeout(function () {

        console.log("Async task is complete");

        // Task successfully complete hua.
        // resolve() Promise ko Fulfilled state me bhejta hai.
        // Iske baad .then() execute hota hai.
        resolve();

    }, 1000);

});

// Promise ko consume (handle) karna.
// resolve() call hote hi ye callback execute hoga.
promiseOne.then(function () {

    console.log("Promise consumed");

});

// another way without storing it into variable
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task two");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async two resolved ");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({ username: "harishpareek", email: "harish123@gmail.com" })   // we can pass data to then 
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        // let error = true
        let error = false
        if (!error) {
            resolve({ username: "abcd", password: "12345678" })
        }
        else {
            reject('ERROR : Something went wrong') // this is connected with reject
        }
    }, 1000)
})

// promiseFour.then().catch()    //.then() → Agar Promise resolve hua to chalega.    .catch() → Agar Promise reject hua ya .then() ke andar error aa gaya to chalega.

promiseFour
    .then((user) => {
        console.log(user);
        return user.username   // CHAINING process is used as hum agar .then se kuchh return kr rhe hai to usko variable me store nhi kar skte issi liye chaining use hoti hai
    })
    .then((username) => {     // jo upar waale then se return hogi value vo iss next .then me aayegi 
        console.log(username);  //user.username print hoga as vo pichhle then se return hua and isme humne vhi as a argument pass kiya hai
    })
    .catch(function (error) {
        console.log(error);
    }).finally(() => {
        console.log("Ye to hamesha execute hoga chahe resolve ho ya reject");

    })
// finally() ka callback hamesha execute hota hai, chahe Promise resolve ho ya reject.
// Matlab:
// ✅ Success hua → finally() chalega.
// ✅ Error aaya → finally() fir bhi chalega.

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = false
        let error = true
        if (!error) {
            resolve({ username: "harish", password: "672834" })
        }
        else {
            reject('ERROR :JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive //await Promise ke complete (resolve ya reject) hone tak wait karta hai. Agar Promise resolve ho jaye to execution try block ki next line se continue hota hai. Agar Promise reject ho jaye to execution seedha catch block me chala jata hai.
        console.log(response);
    }
    catch (error) {
        console.log(error);

    }
}
consumePromiseFive()

// ### Async / Await (Quick Notes)

// * **`async`** keyword kisi function ke aage lagaya jata hai taaki uske andar **`await`** use kiya ja sake.
// * **`await`** sirf **Promise** ke saath aur **`async` function** ke andar hi use hota hai.
// * `await` Promise ko execute nahi karta. Promise pehle hi start ho chuka hota hai. `await` sirf Promise ke complete (resolve/reject) hone ka wait karta hai.
// * Agar Promise **resolve** ho jaye, to `await` ko `resolve()` me di hui value mil jati hai.

// ```javascript
// const response = await promiseFive;
// ```

// * Upar wali line ka matlab:

//   * Promise complete hone tak wait karo.
//   * `resolve()` ki value ko `response` me store kar do.

// * Agar Promise **reject** ho jaye, to control **`catch`** block me chala jata hai.

// ```javascript
// try {
//     const response = await promiseFive;
//     console.log(response);
// }
// catch (error) {
//     console.log(error);
// }
// ```

// * **`try`** → Aisa code likhte hain jahan error aane ki possibility ho.
// * **`catch`** → Agar Promise reject ho ya error aaye, to usse handle karta hai.

// ### Promise vs Async/Await

// * `.then()`  → `await`
// * `.catch()` → `try...catch`

// **Remember:** `await` Promise ka **final result** (resolved value) deta hai, `Promise {<pending>}` nahi.





// ### Promise Doubts (Quick Notes)

// * **Callback Function:** Jab kisi function ko dusre function ke argument ke roop me pass kiya jata hai aur woh dusra function use baad me execute karta hai, to usse **callback function** kehte hain.

// * **Callback khud execute nahi hota.** Jis function ko callback diya gaya hai, wahi use execute karta hai.

//   * `setTimeout()` → callback ko delay ke baad execute karta hai.
//   * `forEach()` → callback ko har element ke liye execute karta hai.
//   * `new Promise()` → Promise executor callback ko turant execute karta hai.
//   * `.then()` → Promise resolve hone par callback execute karta hai.
//   * `.catch()` → Promise reject hone par callback execute karta hai.

// * **Promise me `resolve()` aur `reject()` hi decide karte hain ki aage kya hoga.**

//   * `resolve(value)` → `.then((value) => { ... })`
//   * `reject(error)` → `.catch((error) => { ... })`

// * Agar `resolve()` call hua to **sirf `.then()`** chalega.

// * Agar `reject()` call hua to **`.then()` skip** ho jayega aur **seedha `.catch()`** chalega.

// * `.then((user) => { ... })` me `user` ko hum pass nahi karte. JavaScript automatically `resolve()` me di hui value ko `user` parameter me bhej deti hai.

// * `.catch((error) => { ... })` me `error` ko bhi hum pass nahi karte. JavaScript automatically `reject()` me di hui value ko `error` parameter me bhej deti hai.

// * `resolve()` aur `reject()` me **koi bhi value** pass kar sakte hain—String, Number, Object, Array, etc. Wahi value `.then()` ya `.catch()` me receive hoti hai.

// * **Promise Chaining:** Agar ek `.then()` se koi value `return` ki jati hai, to woh value automatically next `.then()` ke parameter me aa jati hai.








