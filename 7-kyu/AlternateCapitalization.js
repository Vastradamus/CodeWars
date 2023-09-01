/**
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!


 */

function capitalize(s){
    let arr = s.split('')
    let even = arr.map( (e , i) => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join('')
    let odd = arr.map( (e , i) => i % 2 != 0 ? e.toUpperCase() : e.toLowerCase()).join('')
    
    return [even, odd]
  };