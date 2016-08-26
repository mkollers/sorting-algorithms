module.exports.sort = sort;

/**
 * sorts the array with the radix exchange algorithm
 * @param { Array<number> } input - List of unordered numbers
 * @param { number } max - Max value of a number in the unordered list
 */
function sort(input, max) {
    var binary = [],
        binaryLength = (max >>> 0).toString(2).length;

    for (var i = 0; i < input.length; i++) {
        binary[i] = (input[i] >>> 0).toString(2);

        // fill with zeros in front
        for (var j = binary[i].length; j < binaryLength; j++) {
            binary[i] = '0' + binary[i];
        }
    }

    var result = sortBinary(binary, 0, binaryLength - 1);

    // parse result to decimal
    for (var i = 0; i < result.length; i++) {
        result[i] = parseInt(result[i], 2);
    }

    return result;
}

/**
 * Splits a binary array in a left and a right arary and returns the concatination of them. Works recursive!
 * left array: all values with a zero at the given position
 * right array: all values with a one at the given position
 */
function sortBinary(binary, pos, max) {
    var left = [], right = [];

    // iterate through all entries at the given position
    for (var j = 0; j < binary.length; j++) {
        if (binary[j][pos] == '0') { // leading number is 0 --> put in left array
            left.push(binary[j]);
        } else { // leading number is 1 --> put in right array
            right.push(binary[j]);
        }
    }
    if (pos < max) { // if there is another binary to order by
        left = sortBinary(left, pos += 1, max);
        right = sortBinary(right, pos += 1, max);
    }
    binary = left.concat(right); // merge left array with right array
    return binary;
}