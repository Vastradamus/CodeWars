/**               Description
 
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"


https://www.codewars.com/kata/535474308bb336c9980006f2

 */





//                 Solution


var greet = function(name) {
    let capitalizedName = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1,name.length)
    return `Hello ${capitalizedName}!`
    };