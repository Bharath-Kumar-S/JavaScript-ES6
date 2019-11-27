// Immutable data

const s = Object.freeze([1, 2, 3, 4, 5, 6]);

const append = (val) => {

    return `${val} is added`

}

s.map((e) => {

    console.log(append(e));

})