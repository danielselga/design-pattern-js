class Event {
    constructor() {
        this.handlers = new Map()
        this.count = 0
    }

    subscribe(handler) {
        this.handlers.set(this.count++, handler)
        return this.count
    }

    unsubscribe(idx) {
        this.handlers.delete(idx)
    }

    fire(sender, args) {
        this.handlers.forEach(function(v,k) {
            v(sender, args)
        })
    }
}

const whatToQuery = Object.freeze({
	'attack': 1,
	'defense': 2
})

class Query {
	constructor(creatureName, whatToQuery, value) {
		this.creatureName = creatureName
		this.whatToQuery = whatToQuery
		this.value = value
	}

	get attack() {
		let q = new Query(this.name, whatToQuery.attack, this.initial_attack)
		this.game.performQuery(this.q)
		return q.value
	}

		get defense() {
		let q = new Query(this.name, whatToQuery.defense, this.initial_defense)
		this.game.performQuery(this.q)
		return q.value
	}

	toString() {
		return `${this.name} (${this.attack/this.defense})`
	}
}

class CreatureModifier {
	constructor(game, creature) {
		this.game = game
		this.creature = creature
		this.token = game.queries.subscribe(this.handle.bind(this))
	}

	handle(sender, query) {
		// in inheritors
	}

	dispose() {
		game.queries.unsubscribe(this.token)
	}
}

class DoubleAttackModifier extends CreatureModifier {
	constructor(game, creature) {
		super(game, creature)
	}

	handle(sender, query) {
		if (query.creatureName === this.creature.name && query.whatToQuery === whatToQuery.attack) {
			query.value *= 2
		}
	}
}

class IncreaseDefenseModifier extends CreatureModifier {
	constructor(game, creature) {
		super(game, creature)
	}

	handle(sender, query) {
		if (query.creatureName === this.creature.name && query.whatToQuery === whatToQuery.defense) {
			query.value++
		}
	}
}

class Game {
    constructor() {
        this.queries = new Event()
    }
}

class Creature {
    constructor(game, name, attack, defense) {
    	this.game = game
    	this.name = name
    	this.initial_attack = attack
    	this.initial_defense = defense
    }
}

let game = new Game()

let goblin = new Creature(game, 'String Goblin', 2, 2)
console.log(goblin.toString())

let dam = new DoubleAttackModifier(game, goblin)
console.log(goblin)

let idm = new IncreaseDefenseModifier(game, goblin)
console.log(globin.toString());

idm.dispose()
console.log(goblin.toString());	

/**
 *  Summary
 * Chain of responsability can be implemented as a chain of references or a centralized construct.
 * Enlist objects in the chain, possibly controlling their order/priority.
 * In a linked-list implementation, one member can impede further processing.
 * Support removal of objects from the chain (lifetime control)
 */
