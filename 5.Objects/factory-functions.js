function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Drawing');

        }
    };

}

let circle1=createCircle(1);
console.log(circle1);
circle1.draw();

let circle2=createCircle(2);
console.log(circle2);