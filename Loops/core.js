const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

///To print all elements 

//bad
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

//good
for (x of a) {
    console.log(x)
}

//Better
a.forEach(element => {
    console.log(element)
});


///To accumulate all the values in a array

//good 
const total = a.reduce((acc, cur) => acc + cur);
console.log(total);

///To add tweak wach element in that array based on a condition.

//good
const tax = a.map((v) => v * 1.1)
console.log(tax)

///How to filter the array

//good
const filtr = a.filter((v) => (v % 2) == 0)
console.log(filtr)

