/**
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */

function solution(str){
    let arr = str.split('')
     let res = []
    
     
     while (arr.length > 0) {
       if ( arr.length ===1 ) {
         arr.push('_')
       }
       const el =arr.splice(0,2)
       res.push(el.join(''))
     }
    return res
  }