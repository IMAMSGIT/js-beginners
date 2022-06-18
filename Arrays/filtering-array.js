const numbers = [1, -1, 2, 3];
// const filtered = numbers.filter(function (value) {
//     return value >= 0;
// });



//same but shorter
const filtered = numbers.filter(n =>
    n >= 0
);
console.log(filtered);