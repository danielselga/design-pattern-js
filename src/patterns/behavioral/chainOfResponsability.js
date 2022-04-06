/** CHAIN OF RESPONSABILITY PATTERN -> A chain of components who all get a chance to process or a query, optionally having default processing implementation and an ability to terminate the procesing chain.
 * Unethical behavior by an employee; who takes the blame?
    * Employee.
    * Manager.
    * COE.
 * You click a graphical element on a form:
    * Button handles it, stops futher processing.
    * Underlying group box.
    * Underlying window.
 * CCG computer game:
    * Creature has atack and defense values.
    * Those can be boosted by other cards.    
 */

class Creature {
    constructor(name, attack, defense) {
        this.name = name
        this.attack = attack
        this.defense = defense
    }

    toString() {
        return  `${this.name} ${this.attack / this.defense}`
    }
}

class CreatureModifier() {
    constructor(creature) {
        this.creature = creature
        this.next = null // Linked list
    }

    add(modifier) {
        if(this.next) {
            this.next.add(modifier)
        } else {
            this.next = modifier
        }
    }

    handle() {
        if (this.next) {
            this.next.handle();
        }
    }
}

class DobleAttackModifier extends CreatureModifier {
    constructor(creature) {
        super(creature)
    }

    handle() {
        console.log(`Dobling ${this.creature.name}'s attack`)
        this.creature.attack *= 2
        super.handle() // When we call super.method() that able us to use father methods on childs.
    }
}

class IncreaseDefenseModifier extends CreatureModifier {
    constructor(creature) {
        super(creature)
    }

    handle() {
        if (this.creature.attack <= 2) {
            console.log(`Increasing ${this.creature.name}'s defense`)
            this.creature.defense++
        }
        super.handle()
    }
}

class NoBonusesModifier extends CreatureModifier {
    constructor(creature) {
        super(creature)
    }

    handle() {
        console.log(`No bonus for you!`)
    }
}

const goblin = new Creature('Goblin', 1, 1)
console.log(goblin)

const root = new CreatureModifier(goblin)

root.add(new NoBonusesModifier(goblin))

root.add(new DobleAttackModifier(goblin))
root.add(new IncreaseDefenseModifier(goblin))
root.add(new IncreaseDefenseModifier(goblin))

root.handle()

console.log(goblin.toString())

/* Comand query separator
* Command = asking for an action of change (please set your attack value to 2).
* Query = asking for information (please give me your attack).
* CQS = having separate means of sending commands and queries to e.g direct field access.
*/