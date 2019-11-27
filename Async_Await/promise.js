const a = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(`welcome ${name}`)
        }, 2000)
    })
}

// a('Ramya').then((v) => {
// console.log(v);
// })

(async () => {
    const b = await a('Ramya');
    const c = await a('Bharath');
    const d = await Promise.all([b, c])
    console.log(d);
})()