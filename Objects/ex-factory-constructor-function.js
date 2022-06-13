//In factory function style
function createAddress(street, city, address) {
    return {
        street,
        city,
        address
    }
};
let address = createAddress('a', 'b', 'c');
console.log(address);





//constructor function style
function Address(street, city, address) {
    this.street = street;
    this.city = city;
    this.address = address;
}
let address1 = new Address('a', 'b', 'c');
console.log(address1);