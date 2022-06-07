function Circle(radious) {
    this.radious = radious;
    this.draw = function () {
        console.log('Constructor drawing');
    }
}
const circle1=new Circle(1);
console.log(circle1)