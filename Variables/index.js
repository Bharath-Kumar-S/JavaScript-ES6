// (() => {
//     var a = 'global'
//     const app = () => {
//         console.log(a)
//     }
//     app()
// })()

// (() => {
//     var a = 'global'
//     const app = () => {
//         console.log(a)
//         var l = 'local'
//         // l = 'local'
//     }
//     app()
//     console.log(l)
// })()


(() => {
    var a = 'global'
    const app = () => {
        console.log(a)
        // var l = 'local'
        l = 'local' //if not type is given its global
    }
    app()
    console.log(l)
})()