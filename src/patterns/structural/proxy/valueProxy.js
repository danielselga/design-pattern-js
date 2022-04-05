/** PROXY PATTERN -> A class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or some other added functionality.
 * You are calling foo.bar()
 * This assume that foo is the same process as Bar()
 * What if, later on, you want to put all foo-related operations into a separate process.
  * Can you avoid changing your code?
 * Proxy to the rescue!
  * Same interface, entirely different behavior.
 * This is called a communication proxy
  * Other types: logging, virtual, guarding... 
 */
 
class Percentage {
  constructor(percent) {
    this.percent = percent // 0-100
  }

  toString() {
    return `${this.percent}%`
  }

  valueOf() {
    return this.percent / 100
  }
}

let fivePercente = new Percentage(5)