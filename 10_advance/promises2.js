async function getAllUsers() {
    //fetch() JavaScript ka built-in function hai jo server/API se data lane ke liye use hota hai.Simply  :- Internet se data mangwana = fetch()
    // fetch() Promise return karta hai.
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() //Response ke andar jo JSON data hai, usse JavaScript object me convert karo. and it also returns a promise, as it returns a promise ,to iske aage await usse krege taaki agar reject ho to catch me chala jaaye
        console.log(data);

    }
    catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


// using .then().catch()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))