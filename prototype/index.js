class Person {
  constructor(name) {
    this.name = name;
  }
}
const person1 = new Person("Ahemd");
const person2 = new Person("Noor");

person1.great = () => {
  return `this is name ${this.name}`;
};

// console.log(person1.great(), "person 1");
// console.log(person2.great(), "person 2");

// with prototype

class Genral {
  constructor(name) {
    this.name = name;
  }
}
Genral.prototype.great = () => {
  return "this is great function";
};
const copy1 = new Genral("Ahemd");
const copy2 = new Genral("Noor");

console.log(copy1, "person 1");
console.log(copy2, "person 2");
