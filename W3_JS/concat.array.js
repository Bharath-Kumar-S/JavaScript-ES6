var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);

console.log(myChildren);

var theirChildren = arr1.concat(["Emil", "Tobias", "Linus"]); 

console.log(theirChildren);
