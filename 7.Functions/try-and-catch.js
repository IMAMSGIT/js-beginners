const person = {
  firstName: "Mosh",
  lastName: "John",
  set fullName(value) {
    if (typeof value != "string") throw new Error("Value is not a string");
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = null;
} catch (e) {
  console.log(e);
}

console.log(person.fullName);
