function Address(street, city, address) {
    this.street = street;
    this.city = city;
    this.address = address;
}


function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.address === address2.address;

}

function areSame(address1, address2) {
    return address1 === address2;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address2;
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address2, address3));