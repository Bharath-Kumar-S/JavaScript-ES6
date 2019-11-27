const obj1 = {
    name: "Bharath",
    id: 60108696,
    hello: function () {
        console.log(`hello ${this.name}`)
        return `hello ${this.name}`
    }
};


console.log(obj1)
console.log(obj1.hello())


////////////////////////////////////////////////////////

const er = {
    face : 'Ramya'
};

function tr(){
    return this.face
}

const result = tr.call(er)

console.log(result)



// this. function refers to current Object
// this. ()=>{} refers to global object


//multi paradigm example
const dog = {barks : true}
const pug = Object.create(dog)
console.log(pug.barks)