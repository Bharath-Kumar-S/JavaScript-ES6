const a = require('./sample_data').a;

const b = a.reduce((accumulator, currentvalue) => accumulator += currentvalue.id, 0)

console.log(b)