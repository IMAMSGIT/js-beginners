// function sum(args) {
//     console.log(args);
// }


// function sum(...args) {
//     console.log(args);
// }

//first one count just as one argument
//second one count it as an aarray


//applying reduce method
function sum(...args) {
    return args.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3, 4, 5, 6));




// rest parameter must be at last
function anotherSum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(anotherSum(0.1, 20, 30));