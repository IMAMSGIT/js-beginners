console.log(false || true);
console.log(false || 'Whatever');
console.log(false || 1 || 2) // evaluates the first one and then stopped
// always execute the last one
// and not necessarily true or false

// JS falsy values(not exactly as boolean false)
//undefined-null-0-false-''-NaN(not a valid number)


let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);