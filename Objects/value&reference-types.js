// value or primitive types
// Number,String,Boolean,Symbol,undefined,null

// Reference types
// Object,Function,Array


//Primitives are copied by their values
//Objects are copied by their reference


//pass by value
let x = 4;
let y = x;
x = 20;
console.log(x);
console.log(y);


//pass by reference
let p = {
    value: 10
};
let q = p;
p.value = 20;
console.log(p)
console.log(q)

// example of value type
let number = 12;

function increase(number) {
    number++;
}
increase(number);
console.log(number);


// ex of reference type
let obj = {
    value: 18
};

function ref(obj) {
    obj.value++;
}
console.log(obj)