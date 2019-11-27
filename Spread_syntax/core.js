const a = { one: 1 }
const b = { two: 2, three: 3 }

//How to merge object b with a

//badway
a['two'] = 2;
a['three'] = 3;
console.log(a);

//good
const c = Object.assign(a, b);
console.log(c);
// or
const d = Object.assign({ one: 1 }, b);
console.log(d);
//

//Better
const e = { ...a, ...b }
console.log(e);
// or
const f = { one: 1, ...b }
console.log(f);
//


// Arrays
let z = ['Ramya', 'Bharath', 'Sweetu'];

//Bad way
z.push('Kumar')
console.log(z)

//good way
z = [...z, 'Kumar']
z = ['Ramya', 'Bharath', ...z]  //unshift
z = ['Ramya', ...z, 'Bharath']
console.log(z)

