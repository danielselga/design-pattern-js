/** MEMENTO PATTERN -> A token/handler representing the system state. Lets us roll back to the state when the token was generated. May or may not directly expose state information.
 * An object or system goes through changes.
    * E.g a bank account gets deposits and withdraws.
 * There are differents ways of navigating those changes.
 * One way is to record every change (Command) and teach a command to 'undo' itself.
 * Another is to simply save snapshots of the system (Memento).
 */

class Memento {
    constructor(balance) {
        this.balance = balance
        return new Memento(this.balance)
    }

    restore(m) {
        this.balance = m.balance
    }
}

class BankAccount {
    constructor(balance = 0) {
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount;
    }
    
    toString() {
        return `Balance: ${this.balance}`
    }
}

const ba = new BankAccount(100)
const m1 = ba.deposit(50)
const m2 = ba.deposit(25)

console.log(ba.toString())

ba.restore(m1)
console.log(ba.toString())

ba.restore(m2)
console.log(ba.toString())