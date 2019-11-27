const books = [{
    id: 5,
    name: "JS",
    author: "stackoverflow.com"
}, {
    id: 6,
    name: "Selenium",
    author: "Side.org"
}, {
    id: 7,
    name: "Protractor",
    author: "stackoverflow.com"
}, {
    id: 8,
    name: "Github",
    author: "github.com"
}];


(async () => {
    for await (book of books) {
        if (book.author === "stackoverflow.com") {
            console.log(book)
        }
    }
})()