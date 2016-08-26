module.exports.sort = sort;

/**
 * sorts the array with the bubble sort algorithm
 * @param { Array<number> } input - List of unordered numbers
 */
function sort(input) {
    var active = true, sub = 1    
    while (active) {
        active = false; // if this will not be changed, everything is alreaday sorted

        for (var i = 0; i < input.length - sub; i++) {
            if (input[i] > input[i + 1]) {
                active = true;

                // switch positions
                var tmp = input[i];
                input[i] = input[i + 1];
                input[i + 1] = tmp;
            }
        }
        sub++; // next time another number must not be compared
    }
    return input;
}