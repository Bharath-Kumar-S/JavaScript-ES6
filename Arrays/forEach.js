const a = require('./sample_data').a;

a.forEach((item, index) => {
    console.log(`${index} : ${item.id}`);
})

console.table(a);