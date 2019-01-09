const book = {
    id: 2,
    name: "JS",
    author: "stackoverflow.com"
}

//Bad code

// const bookdetails = (book) => {
//     return `Book name is ${book.name} and its id ${book.id} and author is ${book.author}`
// }



//Good code

const bookdetails = ({ //destructuring ojbect
    name,
    id,
    author
}) => {
    return `Book name is ${name} and its id ${id} and author is ${author}`
}

// or 

// const bookdetails = (book) => {
//     const {
//         name,
//         id,
//         author
//     } = book;
//     return `Book name is ${name} and its id ${id} and author is ${author}`
// }


//calling those

console.log(bookdetails(book))



///Template literals

const bookAge = ({
    id,
    name,
    author
}) => {
    const age = id > 3 ? 'old' : 'new';
    return `Book name is ${name} and its ${age}`
}

console.log(bookAge(book));