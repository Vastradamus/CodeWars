/**             Description
 * vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
 */


// solution

function vowelOne(s) {
    let res = '';
    s.split('').forEach(x => {
      switch (x.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          res = res + 1;
          break;
        default:
          res = res + 0;
      }
    });
    return res;
  }