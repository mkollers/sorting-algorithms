module.exports.sort = sort;

/**
 * sorts the array with the quicksort algorithm
 * @param { Array<number> } input - List of unordered numbers
 * @param { number } max - Max value of a number in the unordered list
 */
function sort(input) {
    if (input.length <= 1) return input;

    var left = [], right = [], pivot = input[0];

    for (var i = 1; i < input.length; i++) {
        if (input[i] < pivot) {
            left.push(input[i]);
        } else {
            right.push(input[i]);
        }
    }
    var result = sort(left).concat(pivot, sort(right));
    console.log(result)
    return result;
}