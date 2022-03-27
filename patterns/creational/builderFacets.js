class Person {
  constructor() {
    // Address
    this.streetAddress = this.postcode = this.city = "";

    // Employment
    this.companyName = this.position = "";
    this.annualIncome = 0;
  }

  toString() {
    return `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n
    and works at ${this.companyName} as a ${this.position}, earning ${this.annualIncome}`;
  }
}

class PersonBuilder {
  constructor(person = new Person()) {
    // If i initiate an class instance inside an constructor i can call any method.
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }

  asA(position) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this; // Needs to return this to access the data
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode) {
    this.person.postcode = postcode;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }
}

let pb = new PersonBuilder();
let person = pb.lives
  .at("123 London Road")
  .in("London")
  .withPostcode("SW12BC")
  .works.at("Fabrikan")
  .asA("Engineer")
  .earning(12300)
  .build();

console.log(person);

// Exercise
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class CodeBuilder {
    constructor(className) {
        const className = new className()
    }

    addField(name) {
        return className(name)
    }

    toString() {
        return `This Person name is ${this.name} and his age is ${this.age}`
    }
}

const cb = new CodeBuilder('Person')
console.log(cb)