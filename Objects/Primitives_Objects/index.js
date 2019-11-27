// JS has 7 primatives 

// Boolean
// null
// undefined
// Number
// BigInt
// String
// Symbol

// If it is not a primative 
// then it is an object


/* *******************************
typeof operator
******************************** */
console.log(typeof 23)

console.log(null == undefined)

console.log(null === undefined)

function x() {

}
console.log(x())

console.log(typeof {})

console.log(typeof function x(){})

var y = {}; //define
x['foo'] = 'bar' //mutate
console.log(x)

var foo = Boolean(false)
console.log(foo)
