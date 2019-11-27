const a = [5, 10, 23, 56, 87, 37, 91, 52, 47];

//reduce
let total = a.reduce((crnt, acc) => crnt + acc);


//map

let tax = a.map(v => v * 1.1)

//filter 

let high = a.filter(v => v>50)


console.log(tax, total, high);