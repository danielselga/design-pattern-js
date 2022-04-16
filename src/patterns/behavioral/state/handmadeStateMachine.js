const state = Object.freeze({
	offHook: 'off hook',
	connecting: 'connecting',
	connected: 'connected',
	onHold: 'on hold',
	onHook: 'on hook'
})

const trigger = Object.freeze({
	callDialed: 'dial a number',
	hangUp: 'hangUp',
	callConnected: 'call is connected',
	placeOnHold: 'placed on hold',
	takenOffHold: 'taken off hold',
	leftMessage: 'leave a message'
})

const rules = {}

rules[State.offHook] = [{
	trigger: Trigger.callDialed,
	state: State.connecting
}]