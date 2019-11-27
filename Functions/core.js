//named function
function makeBread(count) {
    const bread = `$`.repeat(count)
    return bread;
    // by default return is undefined
}
const loaves = makeBread(7)
console.log(loaves)
//

//Function expression 
const makebeer = function (count) {
    const beer = `^`.repeat(count)
    return beer;
}
const box = makebeer(7);
console.log(box);
//

//Immediatley Invocable Function expressions
(function () {
    console.log("Hello World")
})()
//

//how to display the arguments 
function makeBreakfast(main, side, drink) {
    console.log(arguments);
    return `Breakfast includes ${main},${side},${drink}`;
}
const Breakfast = makeBreakfast('sandwich', 'cake', 'coke')
console.log(Breakfast);
// 

//Object destructure
const makelunch = (opts) => {
    const { main, side, drink } = opts;
    return `Lunch includes ${main},${side} and ${drink}`
}
console.log(makelunch({ main: "rice", side: "cake", drink: "pepse" }))
// 

//Rest params
const makeDinner = (...opts) => {
    return `Dinner includes the following items : ${opts.join}`
}
console.log(makeDinner(`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `()`))
// 

// Using arrow functions
const makeWine = (count) => `*`.repeat(count) // forces to return the value back
console.log(makeWine(7))
const makeVine = (count) => {
    return `*`.repeat(count) // we must use the return keyword
}
console.log(makeVine(7))
//

//This object in ()function
const makecake1 = () => {
    var a = this
    this.type = `white`;
    function itr() {
        console.log(a.type)
        return a.type
    }
    return itr();
}
console.log(makecake1())
//

//This object in => function
const makecake = () => {
    this.type = `white`;
    const itr = () => {
        console.log(this.type)
        return this.type
    }
    return itr();
}
console.log(makecake())
//

//pure function
const x = (y) => `I am ${y}`;
console.log(x(`Bharath`))
//

//Impure function
let y1 = 0
const x1 = () => {
    return y1 + 1 * 2
}
console.log(x1())
//

//Highorder function
const hof = () => {

}
//

//Settimeout
let haveFun = () => console.log(`fun!`)
setTimeout(haveFun,50)
// (or)
setTimeout(() => console.log(`fun!`),50)
//