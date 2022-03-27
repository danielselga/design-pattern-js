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

// console.log(person);

// Exercise
class CodeBuilder {
    constructor(className) {
        this.classConstructorArr = []
        this.params = []
        this.classConstructorArr.push(`class ${className} {\n`)
    }

    addField(name) {
        this.params.push(name)
    }

    toString() {
        this.classConstructorArr.push(`    constructor(${this.params}) {\n`)
        for (let index in this.params) {
            this.classConstructorArr.push(`       this.${this.params[index]} = ${this.params[index]}\n`)
        }
        this.classConstructorArr.push('    }\n')
        this.classConstructorArr.push('}')
        return this.classConstructorArr.join('')
    }
}
const cb = new CodeBuilder('Person')
cb.addField('name')
cb.addField('age')
console.log(cb.toString())