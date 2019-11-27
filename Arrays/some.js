const a = require('./sample_data').a;

const b = a.some(v => v.id > 14)

console.log(b);

const c = a.some(v => v.id < 4)

console.log(c);