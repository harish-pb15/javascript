let myName = "hitesh      "

// console.log(myName.trueLength)// we want solution for this, answer at last

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);

    }
}

Object.prototype.hitesh = function () {
    console.log("Hitesh is present in all objects");
}

heroPower.hitesh()

myHeroes.hitesh()  //  humne object pe hitesh property inject ki thi ,vo array, function and string me bhi hum use kr skte hai as ye sab Object ke hi sub parts hai
// lekin agar hum jaise array pe koi property define krte hai to usko object pe use nhi kr skte as object is Super part of array means OBject array se upar aata hai hierarchy me


// INHERITANCE : Inheritance is a mechanism by which one object can access the properties and methods of another object.
const user = {
    name: "chai",
    place: "google"
}
const teacher =
{
    makevideo: true
}

const TeachingSupport = { isAvailable: false }

const TASupport =
{
    makeAssignment: ' JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // TASupport me ab hum TeachingSupport ki properties use kr skte hai

}

// we can also do like this

TeachingSupport.__proto__ = teacher

//modern syntax 
Object.setPrototypeOf(TeachingSupport, teacher)
// Teaching support me teacher ki properties use kr skte hai



// solution for the problem at starting
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`) // pehle trim then length
}

myName.trueLength()
"uysvodhhhhhhhb     ".trueLength()