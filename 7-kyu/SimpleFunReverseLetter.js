/**
 * Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
 */

function reverseLetter(str) {
    const letters = "qwertyuiopasdfghjklzxcvbnm";
    
    let reversedChar = str.split('').filter(x => letters.includes(x)).reverse();
    
    const res = str.split('').map(char => {
      if (letters.includes(char)) {
        const letter = reversedChar.shift();
        return letter;
      } else {
        return char; // Return the original character if it's not a letter
      }
    });
  
    return res.join('');
  }