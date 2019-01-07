console.log('Sync code')

setTimeout(_ => console.log('Timeout'),0)

Promise.resolve().then(_ => console.log('Promise'))

console.log('sync code')