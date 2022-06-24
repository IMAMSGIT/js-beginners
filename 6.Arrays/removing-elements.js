const numbers = [1, 2, 3, 4, 5]

//to add at end
// numbers.push();

//to remove from end
const last = numbers.pop();
console.log(numbers);
console.log(last);



//to add at beginning
// numbers.unshift();

//to remove at beginning
const fast = numbers.shift();
console.log(fast);
console.log(numbers);


//to add  in middle
// numbers.splice();

// to remove from desired aindex
numbers.splice(2, 1);
console.log(numbers);