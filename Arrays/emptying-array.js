let numbers = [1, 2, 3, 4, 5];
let another = numbers;


//sol 1
// numbers = [];
// console.log(numbers);
// console.log(another); // a little bit problem


//sol 2 //preferred
// numbers.length = 0;
// console.log(numbers);
// console.log(another);


//sol 3
// numbers.splice(0, numbers.length);
// console.log(numbers);
// console.log(another);


//sol 4
while (numbers.length > 0) {
    numbers.pop();
}
console.log(numbers);