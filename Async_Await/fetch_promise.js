const fetch = require("node-fetch");

var res = fetch('https://jsonplaceholder.typicode.com/todos/1');
res.then(res => res.json())
    .then(user => console.log(user.title))
    .catch(err => console.error(err));

console.log('sync code')