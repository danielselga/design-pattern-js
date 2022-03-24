class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  toString() {
    return `${this.width}x${this.height}`;
  }
}

let rc = new Rectangle(2,3)

console.log(rc.toString())