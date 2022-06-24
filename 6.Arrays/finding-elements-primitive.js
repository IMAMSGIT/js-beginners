// depends on primitive or reference type
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.indexOf(1, 3));
console.log(numbers.indexOf(2));
console.log(numbers.indexOf(22));

// console.log(numbers.indexOf(2) !== -1); // bad style
console.log(numbers.includes(1));