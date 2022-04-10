/** MEDIATOR PATTERN -> A component it facilitates a communication between other components without them necessarily being aware of each other or having direct (reference) access to each other.
 * Components may go in and out of a system at any time
    * Chat room participans.
    * Players in MMORPG.
 * It makes no sense for them to have direct references to one another.
    * Those references may go dead.
 * Solution: Have them all refer to some central component that facilitates communication.   
 */

class Person {
   constructor(name) {
      this.name = name
      this.chatLog = []
   }

   receive(sender, message) {
      const s = `${sender}: ${message}`
      this.chatLog.push(s)
      console.log(`[${this.name}'s chat session] ${s}`)
   }

   say(message) {
      this.room.broadcast(this.name, message)
   }

   pm(who, message) {
      this.room.message(this.name, who, message)
   }
}

class ChatRoom {
   constructor() {
      this.people = []
   }

   join(p) {
      const joinMsg = `${p.name} joins the chat.`
      this.broadcast('room', joinMsg)
      p.room = this
      this.people.push(p)
   }

   broadcast(source, message) {
      for (let p of this.people) {
         if (p.name !== source) {
            p.receive(source, message)
         }
      }
   }

   message(source, destination, message) {
      for (let p of this.people) {
         if (p.name === destination) {
            p.receive(source, message)
         }
      }
   }
}

const room = new ChatRoom()
const jhon = new Person('Jhon')
const jane = new Person('Jane')

jhon.say('Hi room!')
jane.say('Hi Jhon!')

const simon = new Person('Simon')
simon.say('Hi! everyone.')

jane.pm('Simon', 'Glad you could join us!')