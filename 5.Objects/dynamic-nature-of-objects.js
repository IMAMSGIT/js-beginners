// const at first- we can modify it 
// but can't reassign anything after it
const circle = {
    color: 'red'
}
circle.radius = 1; // dynamicly assigning
circle.draw = function () {};

delete circle.radius;
delete circle.color;

console.log(circle);