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

    for (var i = 0; i < binaryLength; i++) {
        var left = [], right = [];
        for (var j = 0; j < binary.length; j++) {
            if (binary[j][i] == '0') {
                left.push(binary[j]);
            } else {
                right.push(binary[j]);
            }
        }
        binary = left.concat(right);
        console.log(binary);
    }

    for (var i = 0; i < binary.length; i++) {
        binary[i] = parseInt(binary[i], 2);
    }

    // console.log(binary);
    return binary;
}