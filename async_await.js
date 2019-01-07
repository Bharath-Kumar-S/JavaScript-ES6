// https://catappapi.herokuapp.com/users/123

var fetch = require('node-fetch');

(async () => {
    const a = await fetch('https://catappapi.herokuapp.com/users/123')
    const response = await a.json();
    const cats = await response.cats;
    cats.forEach(async (cat) => {
        let response = await fetch(`https://catappapi.herokuapp.com/cats/${cat}`)
        let cats = await response.json()
        console.log(cats.imageUrl)
    })
})()