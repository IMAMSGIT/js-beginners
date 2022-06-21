const person = {
    firstName: 'Mosh',
    lastName: 'John',
    // now it's a getter
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'smith adam';

console.log(person);