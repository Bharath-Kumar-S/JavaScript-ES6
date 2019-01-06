const fetch = require("node-fetch");

(async () => {
    var res = await fetch('https://jsonplaceholder.typicode.com/users')
    var datas = await res.json();
    await datas.forEach((data) => {
        console.log(`User id is ${data.id} and name is ${data.username}`);
    })
    res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await res.json();
    console.log(data);
    console.log(data.userId);
})();
