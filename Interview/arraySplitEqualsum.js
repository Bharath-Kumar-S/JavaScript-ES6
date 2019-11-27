const a = (arr) => {
    let sum = arr.reduce((acc, curr) => {
        return acc + curr;
    })
    let suma = 0;
    arr.forEach((element, i) => {
        suma = suma + element;
        if (suma >= sum / 2) {
            console.log(i)
        }
        else {
            console.log(`Else ${i}`)
        }
    });
}
console.log(a([3, 3, 3, 6]))