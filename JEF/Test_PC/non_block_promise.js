console.log('Sync code')

const prm = () => {
    return Promise.resolve().then(() => {
        let i = 0;
        while (i < 1000000000) {
            i++;
        }
        return 'stpper code'
    })
}

prm().then((v) => {
    console.log(v)
})

console.log('Sync code')