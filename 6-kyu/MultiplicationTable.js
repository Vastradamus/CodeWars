/**
 * Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
 */

multiplicationTable = function(size) {
    let arr = new Array(size);

    for (let i = 0; i < size; i++) {
        arr[i] = Array.from({length: size}, (_, x) => (i + 1) * (x + 1))
    }

    return arr
}