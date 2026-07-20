// Immediately Invoked Function Expressions (IIFE)
//Matlab jo function bante hi turant execute ho jaye.
// global scope ke pollution se bachne k liye iife ka use hota hai

(function chai() {  // named IIFE as function ka name likh dia 
    console.log(`DB CONNECTED`);
})(); // semi colon is must to terminate iife 



// Arrow function IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}
)('harish');





