// console.log('Sync code')

// setTimeout(_ => console.log('Timeout'),0)

// Promise.resolve().then(_ => console.log('Promise'))

// console.log('sync code')


console.log('Sync code')

new Promise((resolve, reject) => {
    setTimeout(_ => {
        resolve(console.log('promise'));
    },300)
})

setTimeout(_ => console.log('Timeout'), 0)

console.log('sync code')