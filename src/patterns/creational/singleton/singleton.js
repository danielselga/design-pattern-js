/** SINGLETON PATTERN -> A component which is instantiated only once.
 * For some components it only make sense to have one in the system.
 * Data Base repository.
 * Object Factory.
 * The constructor call is expensive.
 * We want initialization to only happen once.
 * We provide everyone with the same instance.
 * We want to prevent anyone to create additional copies.
 */

class Singleton {
  constructor() {
    const instance = this.constructor.instance;

    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
  }

  foo() {
    console.log("Doing something...");
  }
}

let s1 = new Singleton();
let s2 = new Singleton(); // Always return the instance of S1 because its already initiated.

console.log("Are they identical?", s1 === s2);
