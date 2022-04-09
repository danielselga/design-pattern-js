/** ITERATOR PATTERN -> An object that facilitate the traversal of a data structure.
 * Iteration (traversal) is a core functionality of various data structures.
 * An iterator is a class that facilitates the traversal.
    * Keeps reference to the current element.
    * Knows how to move to a different element.
    * Knows when it's done and there are no elements to move to.
 * JavaScript suports this through:
    * Simbol.iterator member that returns.
    * An iterator object with a function caled next() that.
    * Retruns an object containing:
        * The value being iterated.
        * The done flag indicating when iteration is finished.
 */

class Creature {
    constructor() {
        //this.strength = this.agility = this.inteligence = 10;
        this.stats = new Array(3).fill(10)
    }

    get strength() {
        return this.stats[0];
    }

    set strength(value) {
        this.stats[0] = value;
    }

    get agility() {
        return this.stats[1];
    }

    set agility(value) {
        this.stats[1] = value;
    }

    get intelligence() {
        return this.stats[2];
    }

    set intelligence(value) {
        this.stats[2] = value;
    }

    get sumOfStats() {
        return this.stats.reduce((x, y) => x + y, 0);
    }

    get averageStat() {
        return this.sumOfStats / this.stats.length;
    }

    get maxStat() {
        return Math.max(...this.stats);
    }

    /* get sumOfStats() {
        return this.strength + this.agility + this.inteligence
    }

    get averageStat() {
        return this.sumOfStats / 3
    }

    get maxStat() {
        return Math.max(this.strength, this.agility, this.inteligence)
    }
    */
}

const creature = new Creature()

creature.strength = 10
creature.strength = 10
creature.inteligence = 15

console.log(`Creature has average stat ${creature.averageStat} max stat = ${creature.maxStat} sum of stats = ${creature.sumOfStats}`)
