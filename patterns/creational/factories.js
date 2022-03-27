/**
 * FACTORIES PATTERN -> A component responsible solely for the wholesale (not piecewise) creation of objects.
 * Object creation logic becomes too convoluted.
 * Initializer is not descriptive.
    * Name is always __init__.
    * Cannot overload with the same sets of arguments with different names.
    * Can turn into 'Optional parameter hell'.
 * Wholesale object creation (non-picewise, unlike Builder) can be outsourced to.
    * A separate method (Factory Method).
    * That may exist in a separate class (Factory) .
    * Can create hierarchy of factories with Abstract Factory.
 */