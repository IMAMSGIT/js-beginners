const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n =>
    n >= 0
);


const items = filtered.map(n => ({
    value: n // to return have to rap by parenthesis
}));


console.log(items);
console.log(items[0]);



//chained
const chainedItems = numbers
    .filter(n => n >= 0)
    .map(n => ({
        value: n
    }))
    .filter(obj => obj.value > 1);


console.log(chainedItems);

// const items = filtered.map(n => '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') + '</ul>'; // to remove the comma
// console.log(html);