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
        this.streetAddress = streetAddress
        this.city = city
        this.country = country
    }

    deepCopy() {
        return new Address(this.streetAddress, this.city, this.country)
    }

    toString() {
        return `Address: ${this.streetAddress}, ${this.city}, ${this.country}`
    }
}

class Person {
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    toString() {
        return `${this.name} lives at ${this.address}`
    }

    greet() {
        console.log(`Hi, my name is ${this.name} and i live at ${this.address}`)
    }
}

class Serializer {
    constructor(types) {
        this.types  = types;
    }

    markRecursive(object) {
        let idx = this.types.findIndex(t => {
            return t.name === object.constructor.name;
        })

        if (idx !== -1) {
            object['typeIndex'] = idx

            for(let key in object) {
                if (object.hasOwnProperty(key)) {
                    this.markRecursive(object[key])
                }
            }
        }
    }

    reconstructRecursive(object) {
        if (object.hasOwnProperty('typeIndex')) {
            const type = this.types[object.typeIndex]
            const obj = new type()
            for (let key in object) {
                if (object.hasOwnProperty(key) && object[key] != null) {
                    obj[key] = this.reconstructRecursive(object[key])
                }
            }
            delete obj.typeIndex
            return obj
        }
        return object
    }

    clone(object) {
        this.markRecursive(object)
        const copy = JSON.parse(JSON.stringify(object))
        return this.reconstructRecursive(copy)
    }
}

const john = new Person('john', new Address('123 London Road', 'London', 'UK'))
let jane = john.deepCopy();
jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St'; 

console.log(john.toString()); 
console.log(jane.toString());