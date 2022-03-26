const Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// LOW-LEVEL MODULE
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === "RelationShipBrowser") {
      throw new Error("RelationShipBrowser is abstract!");
    }
  }

  findAllChildrenOf(name) {
    return this.data
      .filter((r) => r.from.name === name && r.type === Relationship.parent)
      .map((r) => r.to);
  }
}

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }
}

// HIGH-LEVEL MODULE
class Research {
//   constructor(relationships) {
//     // Find all children of jhon
//     let relations = relationships.data;
//     for (let rel of relations.filter(
//       (r) => r.from.name === "Jhon" && r.type === Relationship.parent
//     )) {
//       console.log(`Jhon has a child name ${rel.to.name}`);
//     }
//   }
    constructor(browser) {
        for (let p of browser.findAllChildrenOf('Jhon')) {
            console.log(`Jhon has a child name ${p.name}`);
        }
    }
}

const parent = new Person("Jhon");
const child1 = new Person("Chris");
const child2 = new Person("Matt");

const rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);