/* == is for numbers and strings */
/* === is for objects */


// with numbers positive

let a = 5;
let b = 5.0;

if (a == b)
    console.log(`${a} is = ${b}`)
if (a === b)
    console.log(`${a} is = ${b}`)

// with numbers negative

a = 5;
b = 6;

if (a == b)
    console.log(`${a} is = ${b}`)
else
    console.log(`${a} is != ${b}`)
if (a === b)
    console.log(`${a} is = ${b}`)
else
    console.log(`${a} is != ${b}`)


// with objects positive

a = {}
b = {}

console.log(`${a} == ${b} is ${a == b}`)

b = a

console.log(`${a} == ${b} is ${a == b}`)