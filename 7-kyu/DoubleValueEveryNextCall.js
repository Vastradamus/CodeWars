/**         Description
 * This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

Look tests for more examples, good luck :)
 */

//          Solution

class Class {
    static number = 1
    static getNumber() {
      const number = this.number
      this.number *= 2
      return number
    }
  }