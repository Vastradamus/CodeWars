/**
 * Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
 */

/// solution
function factorial(n){
    let res = 1
    for (i =1; i <=n; i++) {
      res *= i
    }
     return res
   }