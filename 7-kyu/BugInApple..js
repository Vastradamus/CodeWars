/**
 * Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]
 */


// solution

function sc(apple){
    let row = apple.findIndex(x => x.includes("B"));
    let col = apple[row].indexOf("B");
    return [row, col];
  }