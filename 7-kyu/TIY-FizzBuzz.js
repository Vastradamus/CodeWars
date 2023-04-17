/**
 * In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
 */


//  solution
function tiyFizzBuzz(sentence){
    if (  sentence == ' ') {
    }
    let vowels = ['a','e','i','o','u'] 
    let char = '!.,.123456789/?'
    let arr = sentence.split('')
    
    return arr.map( letter => {
      if ( letter === ' ' ) {
        return ' '
      } else if ( char.includes(letter)) {
        return letter
      } else if (letter === letter.toUpperCase() && vowels.includes(letter.toLowerCase())) {
        return 'Iron Yard'
      } else if ( vowels.includes(letter.toLowerCase())) {
        return 'Yard'
      } else if ( letter === letter.toUpperCase()) {
        return "Iron"
      } else return letter 
      
    }).join('')
  }