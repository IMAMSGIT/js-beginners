const circle = {
    radius: 1,
    draw() {
        console.log('Drawing');
    }
};

for (let print in circle) {
    console.log(print, circle[print]);
}