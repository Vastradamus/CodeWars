/**
 * Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
 */



function smaller(nums) {
    // arr 
      // arr nums smaller not eqaul to that number
    
      /*
      make an array of nums.length
      map trough it, check if nums[i] > rest of the array
      for that use filter /slice 
      */
      
    let arr = Array.from({length:nums.length},(_,i) => {
      const rest = nums.slice(i+1)
     return rest.filter( y => nums[i] > y).length
    })
    
    return arr
    
      
    }