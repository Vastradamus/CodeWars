/**
 * Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
 */





// SOlution

function expandedForm(num) {
    // PREP
      // P: n, +, whole, not sure of the length , what happens with 0
      // R: string 
      /*
      Put number into a string, 
      
      loop trough the number
      calculate each number by its value + 0 ( length of the num - index)
      push each number into the array
      
      res = array.join (' + ')
      */
      
      let input = num.toString().split('') // [ 1 , 2, 3]
      let temp = ''
      let arr = []
      for ( i = 1; i <= input.length ; i++) {  
        if (input[i-1] != 0) {
          temp = `${input[i-1]}${'0'.repeat(input.length - i)}`
          arr.push(+temp)
        }
    
      }
      return arr.join(' + ')
    }