const orders = [100, 70, 80, 30, 230, 508, 40, 50];

// to add 10% tax

const added_tax = orders.map(order => order * 1.1);

//to add all values in a array

const total = orders.reduce((acc, cur) => acc + cur);

//To filter high orders than 100

const highvalue = orders.filter(order => order >= 100);

console.log(added_tax, total, highvalue);