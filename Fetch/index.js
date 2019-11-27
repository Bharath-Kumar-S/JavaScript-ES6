const fetch = require('node-fetch');

const a = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const response = await resp.json();
    console.log(response.userID);
};

a();