const courses = [{
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
];


// doesn't find actual thing
console.log(courses.includes({
    id: 1,
    name: 'a'
}));


// actual way
const course = courses.find(function (course) {
    return course.name === 'a';
});



const anotherCourse = courses.findIndex(function (course) {
    return course.name === 'a';
});
console.log(course);
console.log(anotherCourse);