class Stuff {
    constructor() {
        this.a = 11
        this.b = 22
    }

    [Symbol.iterator]() {
        let i = 0
        const self = this
        return {
            next: function () {
                return {
                    done: i > 1,
                    value: self[i++ === 0 ? 'a' : 'b']
                }
            },
            [Symbol.iterator]: function () { return this }
        }
    }
}

const values = [100, 200, 300];

for (let i in values) {
    console.log(`Element at pos ${i} is values ${values[i]}`)
}

for (let v of values) {
    console.log(`Values is ${v}`)
}

let stuff = new Stuff()
