const add = (fixed) => (dynamic) => fixed + dynamic;

const rain = add('cloudy');

const sun = add('sunny');

console.log(rain('today'));

console.log(rain('tomorrow'));