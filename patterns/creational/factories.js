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

let CoordinateSystem = {
  cartesian: 0,
  polar: 1,
};
class Point {
  // Naive solution
  //   constructor(a, b, cs = CoordinateSystem.cartesian) {
  //     switch (cs) {
  //       case CoordinateSystem.cartesian:
  //         this.x = a;
  //         this.y = b;
  //         break;
  //       case CoordinateSystem.polar:
  //           this.x = a * Math.cos(b)
  //           this.y = a * Math.sin(b)
  //         break;
  //     }
  //   }

  // constructor(rho, theta) {
  //     this.x = rho * Math.cos(theta)
  //     this.y = rho * Math.sen(theta)
  // }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Factory Methods
  static get factory() {
    return new PointFactory();
  }
}

// Gruping related functionality
class PointFactory {
  newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  // Factory Methods
  newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

const p = PointFactory.newCartesianPoint(4, 5);
console.log(p);

const p2 = PointFactory.newPolarPoint(5, Math.PI / 2);
console.log(p2);

const p3 = Point.factory.newPolarPoint(5, Math.PI / 2)
console.log(p3)