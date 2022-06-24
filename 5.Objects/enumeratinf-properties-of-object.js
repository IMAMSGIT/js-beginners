const circle = {
    radius: 1,
    draw() {
        console.log('Drawing');
    }
};

for (let print in circle) {
    console.log(print, circle[print]);
}

// for(let anotherPrint of circle){
//     console.log(anotherPrint)
// }
//**** Error- for if doesn't iterate an non-iterable */

for (let anotherPrint of Object.keys(circle)) // keys is method
    console.log(anotherPrint);


for (let entry of Object.entries(circle)) // keys is method
    console.log(entry);


//check if a prperty or methos exists in an object
if ('radius' in circle)
    console.log('yes')