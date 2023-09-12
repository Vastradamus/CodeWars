/**
 * You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
 */

function mxdiflg(a1, a2) {
    // 2x arr str  a-z 
    // if empty -1 
    
    // 4 const a1 long a2 long a1 short a2 short 
    
    if (a1.length === 0 || a2.length === 0) {
      return -1
    }
     a1 = a1.map( word => word.length ) 
     a2 = a2.map( word => word.length )
  
    const a1LongestWord = Math.max(...a1)
    const a2LongestWord = Math.max(...a2)
    const a1ShortestWord = Math.min(...a1)
    const a2ShortestWord = Math.min(...a2)
    
    const res1 = a1LongestWord - a2ShortestWord 
    const res2 = a2LongestWord - a1ShortestWord 
    
    return res1 > res2 ? res1 : res2
  }