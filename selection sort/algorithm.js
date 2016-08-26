module.exports.sort = sort;

/**
 * sorts the array with the selection sort algorithm
 * @param { Array<number> } input - List of unordered numbers
 */
function sort(input) {
    for (var i = 0; i < input.length; i++) {
        // set minimum to this position because we don't to any smaller value
        var min = i;

        // check the rest of the array to see if anything is smaller
        for (j = i + 1; j < input.length; j++) {
            if (input[j] < input[min]) {
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min) {
            // switch positions
            var tmp = input[i];
            input[i] = input[min];
            input[min] = tmp;
        }
    }

    return input;
}