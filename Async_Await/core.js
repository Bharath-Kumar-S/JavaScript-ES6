const randm = () => {

    return Promise.resolve(Math.random())

}

let a = randm().then((v) => {

    console.log(v)

})

// Bad way
const randmsum_of_three = () => {

    let first, second, Third;
    return randm().then((v) => {
        first = v;
        return randm();
    }).then((v) => {
        second = v;
        return randm();
    }).then((v) => {
        Third = v;
        return randm();
    })

}

randmsum_of_three().then((v) => console.log(v))


//Good way 

const asyncsum = async () => {
    let first = await randm();
    let second = await randm();
    let third = await randm();

    console.log(`result is ${first + second + third}`)



    if (!! await randm) {
        console.log(true);
    }
    else {
        console.log(false)
    }

    let randoms = Promise.all([randm(), randm(), randm()]);
    console.log(await randoms)

    for (const r of await randoms) {
        console.log(r);
    }

}

asyncsum();

