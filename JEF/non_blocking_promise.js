// console.log('sync code')

// const promise = () => {
//     let i = 0
//     while (i < 1000000000) {
//         i++;
//     }
//     return 'stopper'
// }

// console.log(promise())

// console.log('sync code')

///////////////////////////////////////////////////

// console.log('sync code')

// const prom = () => {
//     return new Promise((resolve) => {
//         let i = 0
//         while (i < 1000000000) {
//             i++;
//         }
//         resolve('stopper')
//     })
// }

// prom().then((value) => {
//     console.log(value)
// })

// console.log('sync code')



/////////////////////////////////////////////////////


console.log('sync code')

const prom = () => {
   return Promise.resolve().then(() => {
        let i = 0
        while (i < 1000000000) {
            i++;
        }
       return 'stopper'
    })
}

prom().then((value) => {
    console.log(value)
})

console.log('sync code')