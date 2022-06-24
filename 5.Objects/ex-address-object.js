let address = {
    street: 'a',
    city: 'b',
    zipCode: 'e'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);