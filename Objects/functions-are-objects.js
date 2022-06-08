function Circle(area) {
    this.area = area;
    this.draw = function () {
        console.log('Automatic constructor')
    }
}
console.log(Circle.length)

//another method
const circle1 = new Function('area', `this.area = area; 
this.draw = function () {
    console.log('Automatic constructor')
}`);

Circle.call({}, 1); // another method