const courses = [{
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
];


//shorter code with arrow function
const course = courses.find(course => course.name === 'a');