/** STATE PATTERN -> A pattern in which the object's behavior is determined by its state. An object transitions form one state to another (something needs to trigger a transition). A formalized construct which manages state and transitions is called a state machine.
 * Consider an ordinary telephone.
 * What you do with depends on the state of the phone/line.
   * If ringing or you want to make a call, you can pick it up.
   * Phone must be off the hook to talk/make a call.
   * If you try calling someone, and it's busy, you put the handset down.
 * Changes in state can be explicit or in response to event (Observer pattern). 
 */

class Switch {
   constructor() {
      this.state = new OffState();
   }

   on() {
      this.state.on(this)
   }

   off() {
      this.state.off(this)
   }
}

class State {
   constructor() {
      if (this.constructor() === State) {
         throw new Error('This is an abstract class!')
      }
   }

   on(sw) {
      console.log(`Light is already on!`)
   }

   off(sw) {
      console.log(`Light is already off...`)
      sw.state = new OffState()
   }
}

class OffState extends State {
   constructor() {
      super()
      console.log(`Light turned off`)
   }

   on(sw) {
      console.log(`Turning light on...`)
      sw.state = new OnState()
   }
}

class OnState extends State {
   constructor() {
      super()
      console.log(`Light turned on!`)
   }
}

let sw = new Switch()

sw.on()
sw.off()
sw.off()