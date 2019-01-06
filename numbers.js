// To fixed 

let a = 22 / 7;
console.log(a.toFixed(2))




// Math functions

// floor and ciel
console.log(Math.floor(a))
console.log(Math.ceil(a))

// random number less than 5 and no number after dec point
// Math.random() gives number between 0 and 1
console.log((Math.random() * 5).toFixed(0));

// random number less than 10 and no number after dec point

console.log((Math.random() * 10).toFixed(0));

//to create a random number between 20 and 25

let upper = 6
let lower = 1

let random = Math.floor(Math.random() * (upper - lower + 1)) + lower

console.log(random)