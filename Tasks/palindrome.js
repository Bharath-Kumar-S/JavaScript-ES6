const palin = (text) => text.toLowerCase() == text.toLowerCase().split('').reverse().join('')

const palin2 = (text) => {
    let arr = text.toLowerCase().split('');
    let result = arr.every((e, index) => {
        return (e === arr[arr.length - index - 1])
    })
    return result;
}

console.log(palin2("Madam madam"))
