/**
 * Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
 */

function duplicateCount(text){
    // P s alpha num   What about empy strings? 
    // R number of char
    /* pseudo code
    
       Split the string into an array
       filter uniques by filter/indexOf/ lastIndexOf
       count uniques ( ether set or filter em with length)
    */
    if (text.length <= 1) {
      return 0
    }
    
    let arr = text.toLowerCase().split('')
    
    let uniques = arr.filter(x=> arr.indexOf(x) != arr.lastIndexOf(x))
    
    const s = new Set(uniques)
  
    return  [...s].length
  }