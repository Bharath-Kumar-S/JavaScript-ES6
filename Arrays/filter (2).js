// const books = [{
//     id: 5,
//     name: "JS",
//     author: "stackoverflow.com"
// }, {
//     id: 6,
//     name: "Selenium",
//     author: "Side.org"
// }, {
//     id: 7,
//     name: "Protractor",
//     author: "stackoverflow.com"
// }, {
//     id: 8,
//     name: "Github",
//     author: "github.com"
// }]

// const stackoverflow = books.filter((book)=>book.author === "stackoverflow.com").filter((book)=>book.name === "Protractor")

// console.log(stackoverflow);

const books = {
    id: 8,
    name: "Github",
    author: "github.com"
}

let a = Object.getOwnPropertyNames(books)
// for (book in books) {
//     console.log(book)
// }
console.log(a)
console.log(a.hasOwnProperty('name'))