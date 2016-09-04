var algorithm = require('./algorithm.js');
var expect = require('chai').expect;

describe('quicksort', function() {
    it('Should order the array [1,5,3,1,3,0]', function() {
        var result = algorithm.sort([1,5,3,1,3,0], 5);
        expect(result).to.eql([0,1,1,3,3,5]);
    });
    it('Should order the array [4,7,8,3,2,5,6,0,9,1]', function() {
        var result = algorithm.sort([4,7,8,3,2,5,6,0,9,1], 9);
        expect(result).to.eql([0,1,2,3,4,5,6,7,8,9]);
    });
});