/** MEDIATOR PATTERN -> A component it facilitates a communication between other components without them necessarily being aware of each other or having direct (reference) access to each other.
 * Components may go in and out of a system at any time
    * Chat room participans.
    * Players in MMORPG.
 * It makes no sense for them to have direct references to one another.
    * Those references may go dead.
 * Solution: Have them all refer to some central component that facilitates communication.   
 */