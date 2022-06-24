const numbers = [1, 2, 3];

//check to see whether all postitve 
const allPositive = numbers.every(function (value) {
    return value >= 0;
});
console.log(allPositive);


//check to see whether at least one postitve 
const atleastonePositive = numbers.every(function (value) {
    return value >= 0;
});
console.log(atleastonePositive);