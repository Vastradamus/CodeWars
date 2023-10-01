/**
 * Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
 */
function findLongest(array){

    let leng = array.map( x=> x.toString().length)
    let index = leng.indexOf(Math.max(...leng))
    return array[index]
  }