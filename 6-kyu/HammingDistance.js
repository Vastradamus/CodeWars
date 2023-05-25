/**
 * The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

Examples:
a = "I like turtles"
b = "I like turkeys"
Result: 3

a = "Hello World"
b = "Hello World"
Result: 0

a = "espresso"
b = "Expresso"
Result: 2
You can assume that the two inputs are ASCII strings of equal length.
 */


function hamming(a,b) {
	//P two strings same length
  // number , upper/lower case counts , empy spaces counts

  /*\
  Split both, and loop trough it, updating a counter if the characters are diffirent 
  */
  
  let first = a.split('')
  let second = b.split('') // strings as an array
  let count = 0
  for ( i = 0; i < first.length; i ++) {
    if (first[i] !== second[i]) {
      count++
    }
  }
  return count 
  
}