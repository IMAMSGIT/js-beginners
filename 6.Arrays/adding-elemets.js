const numbers = [1, 23]; // arrays are objects


// numbers = [] // error, can't assign to constant


numbers.push(4, 5); // add at last


numbers.unshift(1, 2); // add at first


numbers.splice(2, 0, 'a', 'b');

console.log(numbers);