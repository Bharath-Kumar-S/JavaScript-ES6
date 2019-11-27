const arr = [1, 2, 3, 4];
const arr1 = [5, 6, 7, 8];
const sqrd = [];
for (const x of arr) {
    sqrd.push(x ** 2)
}
console.log(sqrd)

// or 

const sqrd1 = arr.map((v) => v ** 2);
console.log(sqrd1)


for (const x of arr) {
    console.log(x);
}


const a = arr.filter((v) => v > 3);
console.log(a);

const b = arr.reduce((sum, current, index) => sum + current)
console.log(b)

const c = arr.concat(arr1)
console.log(c)