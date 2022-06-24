const circle = {
    radius: 2,
    draw() {
        console.log('DDraw');
    }
}

/***** Old method to clone one object to another */
// const another = {}
// for (let key in circle) {
//     another[key] = circle[key];
// }


/***** New method to clone one object to another */
// const another = Object.assign({}, circle) // curly means an empty object but can have any properties
// const another = Object.assign({
//     color: 'Yellow'
// }, circle)


/*******Another way */
const another = {
    ...circle
};

console.log(another);