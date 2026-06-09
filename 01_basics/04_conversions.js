// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Main thing to study here is what happens when we compare different datatypes
console.log("2" > 1);
console.log("02" > 1);
// In above these JS will automatically convert string to number for comparisions

console.log(null > 0); //For > comparison, null is converted to number → 0 ,So it becomes 0 > 0 → false

console.log(null == 0);//== (loose equality) does NOT convert null to 0
// Special rule:
// 👉 null is only equal to undefined
// So:null == 0 → false

console.log(null >= 0); // it becomes 0 >= 0 → true

console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);

// === is used to check strictly It checks:
// Value + Type must both be same
// No type conversion happens.
console.log("2"===2) // false aayega as dono ki datatype different hai