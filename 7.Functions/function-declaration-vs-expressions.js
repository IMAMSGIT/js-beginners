//function declaration
function walk() {
    console.log('walk');
}


//fucntion expression
let run = function () {
    console.log('run');
};

run();

let move = run;
move();