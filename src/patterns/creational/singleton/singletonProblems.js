const fs = require("fs");
const path = require("path");

// Low level module
class MyDataBase {
  constructor() {
    const instance = this.constructor.instance;

    if (instance) {
      return instance;
    }

    this.constructor.instance = this;

    console.log("Init database...");

    this.capitals = {};

    const lines = fs
      .readFileSync(__dirname, "capitals.txt")
      .toString()
      .split("\r\n");

    for (let i = 0; i < lines.length / 2; i++) {
      this.capitals[lines[2 * i]] = parseInt(lines[2 * i + 1]);
    }
  }

  getPopulation(city) {
    return this.capitals[city];
  }
}

class ConfigurableRecordFinder {
  constructor(database = new DummyDataBase()) {
    this.database = database;
  }

  totalPopulation(cities) {
    return cities
      .map((city) => this.database.getPopulation(city))
      .reduce((x, y) => x + y);
  }
}

class DummyDataBase {
  constructor() {
    this.capitals = {
      alpha: 1,
      beta: 2,
      gamma: 3,
    };
  }

  getPopulation(city) {
    return this.capitals[city];
  }
}

module.exports = { MyDataBase, ConfigurableRecordFinder, DummyDataBase };

/**
 *  Summary
 * A constructor can choose what to return, we can keep returning the same instance.
 * Monostate: many instances, shared data.
 * Directly depending on the Singleton is a bad ideia, introduce a dependency instead.
 */
