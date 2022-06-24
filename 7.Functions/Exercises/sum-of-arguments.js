function sum(...items) {
  return items.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4));

// how about passing an array and print their sum
function sumAnother(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

console.log(sumAnother([1, 34]));
