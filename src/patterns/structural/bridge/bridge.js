/** BRIDGE PATTERN -> A mechanism that decouples an interface (hierarchy) from an implementation (hierarchy)
 * Bridge prevents a "Cartesian product" complexity explosion.
 * Exemple:
    * Base class ThreadScheduler.
    * Can be preemptive or cooperative.
    * Can run on Windows or Unix.
    * End up with a 2x2 scenario: WindowsPTS, UnixPTS, WindowCTS, UnixCTS.
 * Bridge pattern avoids the entity explosion. 
 */