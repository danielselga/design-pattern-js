class Property {
	constructor(value, name = '') {
		this._value = value
		this.name = name
	}

	get value() {
		return this._value
	}

	set value(newValue) {
		if (this._value === newValue) {
			return
		}

		console.log(`Assing ${newValue} to ${this.name}`)
	}
}

class Creature {
	constructor() {
		this._agility = new Property(10, 'agility')
	}

	get agitlity() {
		return this._agility.value
	}

	set agitlity(value) {
		this._agility.value = value
	} 
}

let c = new Creature()

c.agitlity = 12

c.agitlity = 13