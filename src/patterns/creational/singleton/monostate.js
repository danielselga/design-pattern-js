class ChiefExecutiveOfficer {
  get name() {
    return ChiefExecutiveOfficer._name;
  }

  set name(value) {
    ChiefExecutiveOfficer._name = value;
  }

  get age() {
      return ChiefExecutiveOfficer._age
  }

  set age(age) {
    ChiefExecutiveOfficer._age = age
  }

  toString() {
      return `CEO name is ${this.name} and he is ${this.age} years old`
  }
}

// Initialize outside the class -> that make our class declared by reference.
// Creating a monostate.
ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;

const ceo = new ChiefExecutiveOfficer()
ceo.name = 'Daniel'
ceo.age = 24

const ceo2 = new ChiefExecutiveOfficer()
ceo.name = 'Gege'
ceo.age = 23

console.log(ceo.toString())
console.log(ceo2.toString())