/** FAÇADE PATTERN -> Exposing several components through a single interface.
 * Provides a simple, easy to understand/user interface over a large and sophisticated body of code.
 * Balance complexity and presentation/usability
 * Typical home:
    * Many subsystem (eletrical, sanitation).
    * Complex internal structure.
    * End user is not exposed to internals.
 * Same with software!
    * Many systems working to provide flexibility, but...
    * API consumers want it to 'just work'
 */

class Buffer extends Array {
    constructor(width=30, height=20) {
        super();
        this.width = width;
        this.height = height;
        this.alloc(width*height)
    }

    write(text, position=0) {
        //
    }
}

class ViewPort {
    constructor(buffer = new Buffer()) {
        this.buffer = Buffer;
        this.offset = 0
    }

    append(text, pos) {
        this.buffer.write(text, pos + this.offset)
    }

    getCharAt(index) {
        return this.buffer[this.offset + index]
    }
}

class Console {
    constructor() {
        this.buffer = new Buffer()
        this.currentViewPort = new ViewPort(this.Buffer)
        this.buffers = [this.buffer]
        this.viewPorts = [this.currentViewPort]
    }

    write(text) {
        this.currentViewPort.buffer.write(text)
    }

    getCharAt(index) {
        this.currentViewPort.getCharAt(index)
    }
}

const c = new Console()
c.write('hello')
const ch = c.getCharAt(0)

/**
 * SUMMARY
 * Build a façade to provide a simplified API over a set of classes.
 * May wish to (optionally) expose internals through the façade.
 * May allow users to 'esclate' to use more complex APIs if they need to.
 */
