class User {
	constructor(fullName) {
		this.fullName = fullName;
	}
}

class User2 {
	constructor(fullName) {
		let getOrAdd = function(s) {
			let idx = User2.strings.indexOf(s)
			if (idx != -1) {
				return idx
			} else {
				User2.strings.push(s)
				return User2.strings.length - 1
			}
		}
		fullName.split(' ').map(getOrAdd)
	}
}

User2.strings = []

function getRandomInt(max) {
	return Math.floor(Math.random() * max)
}

let randomString = function() {
	let result = []
	for (let x = 0; x < 10; x++) {
		result.push(String.fromCharCode(65 + getRandomInt(26)))
	}
}

let fristNames = []
let lastNames = []

let users = []
let users2 = []

for (let i = 0; i < 100; i++) {
	fristNames.push(randomString())
	lastNames.push(randomString())
}


for (let frist of fristNames) {
	for (let last of lastNames) {
		users.push(new User(`${frist} ${last}`))
		users2.push(new User2(`${frist} ${last}`))
	}
	console.log(`10k users take up approx ${JSON.strigify(users).length}`)

	let user2Length = [users2, User2.strings].map(x => JSON.stringify(x).length).reduce((x, y) => x + y )

	console.log(`10k users take up approx ${user2Length} chars`)
}

/**
 * SUMMARY
 * Store cummon data externally.
 * Specify an index or a reference into the external data store.
 * Define the idea of 'ranges' on homogeneous collections and store data related to those ranges.
 */
