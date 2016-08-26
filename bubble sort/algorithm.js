module.exports.sort = sort;

/**
 * sorts the array with the bubble sort algorithm
 * @param { Array<number> } input - List of unordered numbers
 */
function sort(input) {
    var active = true;
    while (active) {
        active = false; // if this will not be changed, everything is alreaday sorted

        for (var i = 0; i < input.length - 1; i++) {
            if (input[i] > input[i + 1]) {
                active = true;

                var tmp = input[i];
                input[i] = input[i + 1];
                input[i + 1] = tmp;
            }
        }
    }
    return input;
}