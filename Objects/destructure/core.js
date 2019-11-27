const bharath = {
    name: "Bharath",
    id: 60108696,
    mob: 9003045843,
    interest: `Javascript`
}

//Bad way
const displaybad = (obj) => `Name is ${obj.name}, id is ${obj.id}, mobile is ${obj.mob} and interest is ${obj.interest}`

//Good way
const displaygood = (obj) => {
    const { name, id, mob, interest } = obj;
    return `Name is ${name}, id is ${id}, mobile is ${mob} and interest is ${interest}`
}

//Good way
const displaygood1 = ({ name, id, mob, interest }) => {
    return `Name is ${name}, id is ${id}, mobile is ${mob} and interest is ${interest}`
}


console.log(displaybad(bharath));
console.log(displaygood(bharath));
console.log(displaygood1(bharath));