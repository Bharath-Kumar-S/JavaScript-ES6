var myRe = new RegExp('d(b+)d', 'g');
var myArray = myRe.exec('cdbbdbsbz');
console.log(myArray)

var myRe = new RegExp('d(b+)d', 'g');
var myArray = 'cdbbdbsbz'.match(myRe);
console.log(myArray)