// declare and define a array
const arr = ['Bharath', 'Ramya', 'Kutty_pappa']

//check if a array
console.log(Array.isArray(arr))

//display the array in table
console.table(arr)

//print array length
console.log(arr.length)

//push a entry
arr.push('Kumar')

//using forEach template it
arr.forEach((ar, index) => {
    console.log(`${index+1}. This is ${ar} here !!!`)
})

//pop last entry
arr.pop();

//print the array
console.log(arr)

//Check if its included
console.log(arr.includes('Ramya'))

//reverse a array
console.log(arr.reverse())

//sort the array
console.log(arr.sort())

//sort the array
console.log(arr.sort())

//reverse sort a array
console.log(arr.reverse(arr.sort()))

//Remove from the front of an Array
console.log(arr.shift())

console.log(arr)

//Add to the front of an Array
console.log(arr.unshift('Ramya'))

console.log(arr)

//Find the index of an item in the Array
console.log(arr.indexOf('Bharath'))

//remove a element by position 
console.log(arr.splice(1, 1))

console.log(arr)


/**************************************************** */

//Next example

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1,
    n = 2;

var removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables);
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems);
// ["Turnip", "Radish"]



//copy a array
var shallowCopy = vegetables.slice()
console.log(shallowCopy)




//Filling a array with values
var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]


//Map array
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


//Array from
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


//Array of

console.log(Array.of(1, 2, 3, 4))


//concat
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

//Array reduce
[0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) =>{
    console.log(currentIndex)
});


//Array some function
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
