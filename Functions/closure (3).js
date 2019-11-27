// const create = () => {
//     var count = 0;
//     return {
//         inc: count++,
//         print: count
//     }
// }

// const a = create()
// console.log(a.inc)
// console.log(a.print)


// const create = () => {
//     return {
//         name: "Bharath",
//         id: "60108696"
//     }
// }


// const a = create();
// console.log(a.name);

function makeFunc() {
    var name = 0;
    function displayName() {
        ++name;
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();