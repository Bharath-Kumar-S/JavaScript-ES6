const a = () => {
    const fish = "salmon"
    let count = 0;
    const inner = () => {
        count++;
        return `${count} ${fish}`
    }
    return inner
}

const fun = a()
// console.log((a())())
console.log(fun())
console.log(fun())
console.log(fun())
console.log((a())())
console.log(fun())
console.log(fun())
console.log(fun())
// *********************************************************************

// function useCat() {
//     let name = 'baby kitten';
//     return [() => `Meow ${name}`, (newName) => name = newName]
// }

// const [meow, setName] = useCat();
// console.log(meow())

// setName(`Ramya`)

// console.log(meow())