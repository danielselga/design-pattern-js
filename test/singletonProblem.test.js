const { MyDataBase, ConfigurableRecordFinder} = require("../src/patterns/creational/singleton/singletonProblems");

describe("Singleton database", function () {
  it("is a singleton", function () {
    const db1 = new MyDataBase();
    const db2 = new MyDataBase();
    expect(db1).toBe(db2);
  });

  it('calculates total population Better', function() {
    // let db = new DummyDataBase()
    let rf = new ConfigurableRecordFinder()
    expect(rf.totalPopulation(['alpha', 'gamma'])).toEqual(4)
  })
});
