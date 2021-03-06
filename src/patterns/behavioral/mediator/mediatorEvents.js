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

class PlayerScoredEventArgs {
    constructor(playerName, goalsSocredSoFar) {
        this.playerName = playerName,
        this.goalsSocredSoFar = goalsSocredSoFar
    }

    print() {
        console.log(`${this.playerName} has scored! their ${this.goalsSocredSoFar} goal`)
    }
}

class Game {
    constructor() {
        this.events = new Event()
    }
}

class Player {
    constructor(name, game) {
        this.name = name
        this.game = game
        this.goalsScored = 0
    }

    score() {
        this.goalsScored++
        let args = new PlayerScoredEventArgs(this.name, this.goalsScored)
        this.game.events.fire(this, args)
    }
}

class Coach {
    constructor(game) {
        game.events.subscribe(function(sender, args) {
            if (args instanceof PlayerScoredEventArgs && args.goalsSocredSoFar < 3) {
                console.log(`Coach says: well done, ${this.playerName}`)
            }
        })
    }
}

const game = new Game()
const player = new Player('sam', game)
const coach = new Coach(game)

player.score()
player.score()
player.score()

/** Summary
 * Create the mediator and have each object in the system refer to it.
 * Mediator engages in bidirectional communication with connected components.
 * Mediator has functions the components can call.
 * Components have functions the mediator can call.
 */