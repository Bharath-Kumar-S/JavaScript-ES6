const a = require('./sample_data').a;

const b = a.every(v => v.id > 10)

console.log(b);