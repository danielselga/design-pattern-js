/** COMMAND PATTERN -> An object which represents an instruction to perform a particular action. Contains all the information necessary for the action to be taken.
 * Ordinary statements are perishible.
   * Cannot undo meber assignment.
   * Cannot directly serialize sequence of actions (calls).
 * Want an object that represents an operation.
   * Person should change its age to value 22.
   * Car should do explode()
 * Uses: GUI commands, multi-level undo/redo, macro recording and more! 
 */


class BankAccount {
   constructor(balance = 0) {
      this.balance = balance
   }

   deposit(amount) {
      this.balance += amount
      console.log(`Deposited ${amout}, balance is now ${this.balance}`)
   }

   withDraw() {
      if (this.balance - amount >= BankAccount.overdraftLimit) {
         this.balance -= amount
         console.log(`Withdew ${amount}, balance is now ${this.balance}`);
         return true
      }

      return false
   }

   toString() {
      return `Balance: ${this.balance}`
   }
}

BankAccount.overdraftLimit = -500

let Action = Object.freeze({
   'deposit': 1,
   'withdraw': 2
})

class BankAccountCommand {
   constructor(account, action, amount) {
      this.account = account
      this.action = action
      this.amount = amount
      this.succeed = false
   }

   call() {
      switch(this.action) {
         case Action.deposit:
            this.account.deposit(this.amount)
            this.succeed = true
            break;
         case Action.withDraw:
            this.suceed = this.account.withDraw(this.amount)
            break;
      }
   }

   undo() {
      if (!this.succeed) {
         return
      }

      switch(this.action) {
         case Action.deposit:
            this.account.withDraw(this.amount)
            break;
         case Action.withDraw:
            this.account.deposit(this.amount)
            break;
      }
   }
}

let ba = new BankAccount(100)
ba.deposit(100)

let cmd = new BankAccountCommand(ba, Action.deposit, 50)
cmd.call()
console.log(ba.toString())

/** Summary
 * Encapsulate all detatails of an operation in a separate object
 * Define instruction for applyung the command (either in the command) itself, or elsewere.
 * Optionally define composite commands
 */