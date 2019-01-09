const foo = {
    name: "JS",
    age: 20,
    star: 5
}
const bar = {
    name: "TS",
    age: 5,
    star: 4
}
const baz = {
    name: "GIT",
    age: 12,
    star: 4
}

//Bad way

console.log(foo, bar, baz)

//good way

console.log({
    foo,
    bar,
    baz
})

//Console.Table

// if the objects have common properties then use console.table

console.table([foo, bar, baz])


// use console.trace to know where a function call orginated

const deleteDb = () => console.trace('bye bye DB');

deleteDb();
deleteDb();

