/** BRIDGE PATTERN -> A mechanism that decouples an interface (hierarchy) from an implementation (hierarchy)
 * Bridge prevents a "Cartesian product" complexity explosion.
 * Exemple:
    * Base class ThreadScheduler.
    * Can be preemptive or cooperative.
    * Can run on Windows or Unix.
    * End up with a 2x2 scenario: WindowsPTS, UnixPTS, WindowCTS, UnixCTS.
 * Bridge pattern avoids the entity explosion. 
 */

class VectorRender {
   rendererCircle(radius) {
      console.log(`Drawing a circle radius of radius ${radius}`)
   }
}

class RasterRender {
   rendererCircle(radius) {
      console.log(`Drawing pixels for a circle of radius ${radius}`)
   }
}

class Shape { // Bridge
   constructor(renderer) {
      this.renderer = renderer
   }
}

class Circle extends Shape {
   constructor(renderer, radius) {
      super(renderer)
      this.radius = radius
   }

   draw() {
      this.renderer.rendererCircle(this.radius)
   }

   resize(factor) {
      this.radius *= factor
   }
}

const raster = new RasterRender()
const vector = new VectorRender()
const circle = new Circle(vector, 5)
circle.draw()
circle.resize()
circle.draw

// VC VS RC RS
// Render - Raster, Vector...

/**
 *  Summary
 * Decouple abstraction form implementation.
 * Both can exist as hierarchies.
 * A strong form of encapsulation.
 */
