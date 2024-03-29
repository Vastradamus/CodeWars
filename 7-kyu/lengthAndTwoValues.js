/**\
 * Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
 */



// solution

function alternate(n, firstValue, secondValue){
    return new Array(n).fill(0).map( (x,i) => {
      if ( i % 2 === 0) {
        return firstValue 
      } else return  secondValue 
    })
  }