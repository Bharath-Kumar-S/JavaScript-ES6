const prepare = (x) => {
    return Promise.resolve().then(() => `${x} done`)
}


// const a = prepare('a');
// const b = prepare('b');

// console.log(a, b)



(async () => {


    const a = await prepare('a');
    const b = await prepare('b');
    const c = Promise.all([a, b]);
    c.then((v) => {
        console.log(v)
    })

})()