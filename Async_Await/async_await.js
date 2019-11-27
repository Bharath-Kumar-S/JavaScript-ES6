const rand = () => {
    return Promise.resolve(Math.random());
}

//Bad promise code 

// console.log(rand());

//We need to sum three random numbers

// const sumofall = () => {
//     let f, s, t;

//     return rand().then(
//             v => {
//                 f = v;
//                 return rand();
//             }
//         ).then(
//             v => {
//                 s = v;
//                 return rand();
//             })
//         .then(
//             v => {
//                 t = v;
//                 return (f + t + s);
//             })

// }

// sumofall().then(v => console.log(v));


// Good code 


const sumofall = async () => {
    let f = await rand(),
        s = await rand(),
        t = await rand();
    console.log(`Result is ${f+s+t}`);
}

sumofall()