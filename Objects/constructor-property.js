// every object has a property and it is constructor
function Circle(area) {
    this.area = area;
    this.draw = function () {
        console.log('Automatic constructor')
    }
}

let exampleofConstructor = new Circle();
console.log(exampleofConstructor.constructor)