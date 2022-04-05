/** PROXY PATTERN -> A space optimization technique that lets us use less memory by storing externally the data associated with simillar objects.
 * You are calling foo.bar()
 * This assume that foo is the same process as Bar()
 * What if, later on, you want to put all foo-related operations into a separate process.
  * Can you avoid changing your code?
 * Proxy to the rescue!
  * Same interface, entirely different behavior.
 * This is called a communication proxy
  * Other types: logging, virtual, guarding... 
 */