/** PROTOTYPE PATTERN -> A partially  or fully initialized object that you copy (clone) and make use of.
 * Complicated objects (e.g car) aren't designed from scratch.
 * They reiterate existing deisgns.
 * An existing (partially of fully constructed) design is a Prototype.
 * We make a copy (clone) the prototype and customize it.
 * Require deep copy support
 * We make cloning convenient (e.g via a factory).
 */

class Address {
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  deepCopy() {
    return new Address(this.streetAddress, this.city, this.country);
  }

  toString() {
    return `Address: ${this.streetAddress}, ${this.city}, ${this.country}`;
  }
}

class Employee {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  toString() {
    return `${this.name} lives at ${this.address}`;
  }

  greet() {
    return `Hi, my name is ${this.name} and i live at ${this.address}`;
  }
}

class Serializer {
  constructor(types) {
    this.types = types;
  }

  markRecursive(object) {
    // anoint each object with a type index
    let idx = this.types.findIndex((t) => {
      return t.name === object.constructor.name;
    });
    if (idx !== -1) {
      object["typeIndex"] = idx;

      for (let key in object) {
        if (object.hasOwnProperty(key) && object[key] != null)
          this.markRecursive(object[key]);
      }
    }
  }

  reconstructRecursive(object) {
    if (object.hasOwnProperty("typeIndex")) {
      let type = this.types[object.typeIndex];
      let obj = new type();
      for (let key in object) {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.reconstructRecursive(object[key]);
        }
      }
      delete obj.typeIndex;
      return obj;
    }
    return object;
  }

  clone(object) {
    this.markRecursive(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}

class EmployeeFactory {
  static _newEmployee(prototype, name, suite) {
    const copy = EmployeeFactory.serializer.clone(prototype);
    copy.name = name;
    copy.address.suite = suite;
    return copy;
  }

  static newAuxOfficeEmployee(name, suite) {
    return this._newEmployee(EmployeeFactory.aux, name, suite);
  }

  static newMainOfficeEmployee(name, suite) {
    return this._newEmployee(EmployeeFactory.main, name, suite);
  }
}

EmployeeFactory.serializer = new Serializer([Employee, Address]);
EmployeeFactory.main = new Employee(
  null,
  new Address("123 East Drive", "London")
);
EmployeeFactory.aux = new Employee(
  null,
  new Address("200 London Rd"),
  "Oxford"
);

const john = new Employee();
let s = new Serializer([Employee, Address]);
let jane = s.clone(john);

const daniel = EmployeeFactory.newMainOfficeEmployee("Daniel", 4321);
const gege = EmployeeFactory.newAuxOfficeEmployee("Gege", 222);
console.log(daniel.toString());
console.log(gege.toString());

/**
 *  Summary
 * To implement a prototype partially construct an object and store it somewhere.
 * Deep copy the prototype.
 * Customize the resulting instance.
 * A factory provides a convenient API for using prototypes.
 */
