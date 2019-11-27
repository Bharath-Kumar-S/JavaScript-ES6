const book = {
    name: "JS",
    id: 5,
    author: "Stackoverflow"
}

const display = ({name,id,author}) => {

console.log(`Book name is ${name} and id is ${id} and author is ${author}`);

}

display(book);