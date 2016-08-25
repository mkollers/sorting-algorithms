module.exports.sort = sort;

/**
 * sorts the array with the distribution counting algorithm
 * @param { Array<number> } input - List of unordered numbers
 * @param { number } max - Max value of a number in the unordered list
 */
function sort(input, max) {
    var z = 0, count = [];

    // initilizes the array with zeros
    for (var i = 0; i <= max; i++) {
        count[i] = 0;
    }

    // count how often a number exists in the list
    for (var i = 0; i < input.length; i++) {
        count[input[i]] += 1;
    }    

    // address calculation
    for (var i = 0; i <= max; i++) { // iterate from 0 to the max value
        for (j = 0; j < count[i]; j++) { // add the number as often as it was in the initial array
            input[z + j] = i;
        }
        z += count[i];
    }

    return input;
}