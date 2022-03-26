class Document {}

class Machine {
  constructor() {
    if (this.constructor.name === "Machine") {
      throw new Error("Machine is abstract!");
    }
  }

  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
  print(doc) {
    //
  }

  fax(doc) {
    //
  }

  scan(doc) {
    //
  }
}

class NotImplementedError extends Error {
  constructor(name) {
    const msg = `${name} is not implemented!`;
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotImplementedError);
    }
  }
}

class OldFashionPrinter extends Machine {
  print(doc) {
    // ok
  }

  //   print(doc) {
  //     // do nothing
  //     // principle of least surprice
  //   }

  scan(doc) {
    throw new NotImplementedError("Old fashion printer cant scan");
  }
}

// ISP = Segregate (split up)
class Printer {
  constructor() {
    if (this.constructor.name === "Printer") {
      throw new Error("Printer is abstract");
    }
  }

  print() {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === "Scanner") {
      throw new Error("Scanner is abstract");
    }
  }
}

class Photocopier {
    print() {}
    scan() {}
}

const printer = new OldFashionPrinter();
printer.scan();
