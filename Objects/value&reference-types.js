// value or primitive types
// Number,String,Boolean,Symbol,undefined,null

// Reference types
// Object,Function,Array


//Primitives are copied by their values
//Objects are copied by their reference

let x = 4;
let y = x;
x = 20;
console.log(x);
console.log(y);