const numbers = [7, 3, 9];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);


const courses = [{
    id: 1,
    name: 'Node.js'
}, {
    id: 2,
    name: 'javascript'
}, ];

//to overcome up and lowercase naming 



courses.sort(function (a, b) {

    const nameA = a.name.toLowerCase;
    const nameB = b.name.toLowerCase;

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

});
console.log(courses);