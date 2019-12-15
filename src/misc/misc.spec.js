var assert = require('assert');

describe('misc', function () {

    it('ife - immediate function execution ', function() {

        var mynumber = 23;
        
        var actual = (function(number){
            return number * number / 2;
        }(mynumber))

        let expected = '???';

        assert.equal(actual, expected);

    })
});