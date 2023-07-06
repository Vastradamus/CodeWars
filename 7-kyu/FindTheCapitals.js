/**
 * Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
 */


var capitals = function (word) {
	// s 
  // arr 
  /* split the string to array
      loop trough the array
      if the el equals el.toUpperCase(), push the index to the arr
  */
  
  const arr = word.split('')
  let res = []
  
  arr.forEach( (el,i) => {
    if ( el === el.toUpperCase()) {
      res.push(i)
    }
  })
  return res
};