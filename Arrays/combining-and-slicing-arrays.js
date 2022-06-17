const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);


const slice = combined.slice(2, 4); // (start,end)
console.log(slice);

//slice.(start) -> from start to the rest
//slice()-> copy of the old


//referece type
const third = [{
    id: 1
}];
third[0].id = 2;

const fourth = [4, 5, 6];

const refType = third.concat(fourth);
console.log(refType);