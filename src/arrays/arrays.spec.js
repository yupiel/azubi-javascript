var assert = require('assert');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return ??? when the value is not present', function () {

            let givenArray = [1, 2, 3];
            let actual = givenArray.indexOf(4);
            let expected = 'xx';

            assert.equal(actual, expected);
        });
    });
});