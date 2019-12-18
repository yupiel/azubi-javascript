var assert = require('assert');

describe('scope', function () {
    it('is everywhere', function outer() {

        // v1 defined in the scope of the function 'testFunc'
        var v1 = 123;

        // function is defined in the scope of the function 'testFunc'
        function inside() {

            // v2 is defined in the scope of the function 'inside'
            var v2 = 4321;

            function insideAgain() {
                // v3 is defined in the scope of the function 'insideAgain'
                var v3 = v2 + v3;
            }

            return insideAgain();
        }

        let actual = ['outer', inside.name, 'insideAgain'].join(',');

        // name the scopes if v1, v2 and v3
        let expected = '???';

        assert.equal(actual, expected);
    });

    it('my scope can be access with "this"', function outer() {

        // this variable is not used
        var typeSpeed = 22;

        let programmer = {
            typeSpeed: 11,
            typing: function() {
                // 'this' references the object called 'programmer'
                return this.typeSpeed * 3;
            }
        };

        let actual = programmer.typing();
        let expected = '???';

        assert.equal(actual, expected);
    });

    it('set the scope with "call"', function outer() {

        let programmer = {
            typeSpeed: 11,
            typing: function() {
                return this.typeSpeed * 3;
            }
        };

        var student = {
            typeSpeed: 22
        }

        // call the method typing on the object programmer with the scope set to student 1
        let actual = programmer.typing.call(student);
        let expected = '???';

        assert.equal(actual, expected);
    });
});