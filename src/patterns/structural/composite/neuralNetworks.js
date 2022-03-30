const aggregation = (baseClass, ...mixins) => {
  class base extends baseClass {
    constructor(...args) {
      super(...args);
      mixins.forEach((mixin) => {
        copyProps(this, new mixin());
      });
    }
  }
  let copyProps = (target, source) => {
    // this function copies all properties and symbols, filtering out some special ones
    Object.getOwnPropertyNames(source)
      .concat(Object.getOwnPropertySymbols(source))
      .forEach((prop) => {
        if (
          !prop.match(
            /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/
          )
        )
          Object.defineProperty(
            target,
            prop,
            Object.getOwnPropertyDescriptor(source, prop)
          );
      });
  };
  mixins.forEach((mixin) => {
    // outside constructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  });
  return base;
};

class Connectable {
  connectTo(other) {
    for (let from of this) {
      for (let to of other) {
        to.in.push(from);
      }
    }
  }
}

class Neuron extends Connectable {
  constructor() {
    super();
    this.in = [];
    this.out = [];
  }

  // connectTo(other) {
  //     this.out.push(other)
  //     other.in.push(this)
  // }

  toString() {
    return `A neuron with ${this.in.length} inputs and ${this.out.length} outputs`;
  }

  [Symbol.iterator]() {
    let returned = false;
    return {
      next: () => ({
        value: this,
        done: returned++,
      }),
    };
  }
}

class NeuronLayer extends aggregation(Array, Connectable) {
  constructor(count) {
    super();
    while (count-- > 0) {
      this.push(new Neuron());
    }
  }

  toString() {
    return `A layer with ${this.length} neurons`;
  }
}

const neuron1 = new Neuron();
const neuron2 = new Neuron();
const layer1 = new NeuronLayer(3);
const layer2 = new NeuronLayer(4);

// neuron1.connectTo(neuron2)
// neuron1.connectTo(layer2)
layer2.connectTo(neuron1);
layer1.connectTo(layer2);

console.log(neuron1.toString());
console.log(neuron2.toString());

/**
 * SUMMARY
 * Objects can use other objects via inheritance/composition.
 * Some composed and singular objects need similar/identical behaviors.
 * Composite design pattern lets us treat both type of objects uniformly.
 * JavaScript suports iteration with Symbol.iterator.
 * A single object can make itself iterable by yielding this.
 */
