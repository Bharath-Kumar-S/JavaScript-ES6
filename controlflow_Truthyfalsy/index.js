let truthy;

if (truthy) {
    // do this
    console.log("Truthy")
}
else if (truthy == null) {
    // do this
    console.log("Null")
}
else {
    //do that
    console.log("Else Block")
}

console.log("")
console.log(true)
console.log(!! true)
console.log(!!{})
console.log(!![])
console.log(!! 'Ramya')
console.log(!! '')
console.log(!!0)
console.log(!!5)

console.log(true && true)
console.log(true && false)

console.log(true || true)
console.log(true || false)

console.log("23" == 23)
console.log("23" === 23)

// ternary

let z = true ? 1 : 2;
console.log(z)

let z1 = false ? 1 : 2;
console.log(z1)


// switch

let expression = 'dog'

switch (expression) {
    case 'dog':
        console.log('Dog')
        break;
    case 'cat':
        console.log('cat')
        break;
}


//Try and catch block

try {
    console.log('works')
}
catch{
    console.log('broken')
}


try {
    throw new Error();
    console.log('works')
}
catch (error) {
    console.log('broken')
}
finally {
    console.log('always works')
}

