/**
 * You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:

function eliminateUnsetBits(number);
Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0
 */


function eliminateUnsetBits(number) {
    // s , 1/0, l > 1? 
    // all 0 return 0, else return number from binary ones
    // filter 0, check length, return number CHANGE STRING
    
    number = number.split('').filter(x=> x != 0).join('')
    return number.length === 0 ? 0 : parseInt(number,2)
  }