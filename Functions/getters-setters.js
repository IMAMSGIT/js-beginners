const person = {
    firstName: 'Mosh',
    lastName: 'John',
    fullName() {
        return `${person.firstName} ${person.lastName}`
    }
};

console.log(person.fullName);