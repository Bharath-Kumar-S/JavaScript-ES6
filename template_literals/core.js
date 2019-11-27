const bharath = {
    name: "Bharath",
    id: 60108696,
    mob: 9003045843,
    age: 25,
    interest: `Javascript`
}

//Bad way
const displaybad = (obj) => `Name is ` + obj.name + ` id is ` + obj.id + `, mobile is` + obj.mob + ` and interest is ` + obj.interest;

//Good way
const displaygood = (obj) => {
    const { name, id, mob, interest } = obj;
    return `Name is ${name}, id is ${id}, mobile is ${mob} and interest is ${interest}`
}

console.log(displaybad(bharath));
console.log(displaygood(bharath));


function HumanAge(str, aged) {
    const ageStr = aged > 50 ? `old` : `young`;
    return `${str[0]}${ageStr} at ${aged} years`;
}

console.log(HumanAge`This human is ${bharath.age}`)