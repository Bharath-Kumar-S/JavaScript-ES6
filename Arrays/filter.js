const a = require('./sample_data').a;

console.log(a)

const b = a.filter((v) => v.id > 15)

console.log(b)

const c = a.filter((v) => {
    return v.name.charAt(0) == `K`
})

console.log(c)