var assert = require('assert');

describe('function', function () {
    describe('calling', function () {
        it('return value of a function not returning anything is ???', function () {

            function noop() {}
            
            let expected = '???';

            let actual = noop();

            assert.equal(actual, expected);
        });
    });
});