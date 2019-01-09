const book = {
    id: 2
}

const book2 = {
    author: "stackoverflow.com",
    name: "JS"
}

//////////////////////////////////////////////
// Bad code

// book['author'] = book2.author;
// book['name'] = book2.name;

console.log(book);
//////////////////////////////////////////////
//or 

// const New_book = Object.assign(book, book2);
const New_book = Object.assign(book, {
    name: "JS"
});

console.log(New_book);
//////////////////////////////////////////////

///Good way  using spread syntax

// const Newer_book = { ...book,
//     ...book2
// };
const Newer_book = { ...book,
    name: "JS"
};

console.log(Newer_book);

//////////////////////////////////////////////
/////////////Spread syntax for arrays

// if we need to add new elem to the array instaed of pushing one by one

let arr = ['Bharath', 'Ramya', 'Kutty_pappa']
//////////////////////////////////////////////
// Bad code 

// arr.push("DXC");
// arr.push("HPE");

// console.log(arr);

//////////////////////////////////////////////
// good code 

//create a new array and push it with spread syntax

// arr = [...arr,'DXC','HPE'];

// console.log(arr);
//////////////////////////////////////////////
// or {PUSHing}

// let b = ['DXC','HPE']

// arr = [...arr,...b];

// console.log(arr);

//////////////////////////////////////////////
//or unshifting

// let b = ['DXC','HPE']

// arr = [...b,...arr];

// console.log(arr);

////////////////////////////////////////////
arr = ['DXC',...arr,'HPE'];

console.log(arr);
