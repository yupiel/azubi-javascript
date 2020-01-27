var arrays = require('./arrays');

var assert = require('assert');

describe('arrays', function () {
    describe('actions', function () {
        it('array has a length', function () {

            let givenArray = [1, 2, 3];
            let actual = arrays.getLength(givenArray);
            let expected = 3;

            assert.deepEqual(actual, expected);
        });

        it('copy array', function () {

            let givenArray = [1, 2, 3];
            let copiedArray = arrays.copyArray(givenArray);

            assert.deepEqual(givenArray, copiedArray);
        });

        it('add element', function () {

            let givenArray = [1, 2, 3];
            let expected = [1,2,3,4];

            arrays.addElementToArray(givenArray, 4);

            let actual = Array.from(givenArray);
            assert.deepEqual(actual, expected);
        });

        it('add multiple elements', function () {

            let givenArray = [1, 2, 3];
            let expected = [1,2,3,4,5,6,7];

            arrays.addElementsToArray(givenArray, [4,5,6,7]);

            assert.deepEqual(givenArray, expected);
        });

        it('access element', function () {

            let givenArray = [1, 2, 3];
            let actual = givenArray[2];

            let expected = '???';

            assert.deepEqual(actual, expected);
        });

        it('access index of element', function () {

            let givenArray = ['a', 'b', 'c', 'd', 'a', 'b'];
            let actual = givenArray.indexOf('c');
            let expected = '???';

            assert.deepEqual(actual, expected);
        });


        it('concat arrays', function () {

            let firstArray = [1,2,3];
            let secondArray = [4,5,6];

            let actual = firstArray.concat(secondArray);
            let expected = '???';

            assert.deepEqual(actual, expected);
        });

        it('join arrays', function () {

            let firstArray = [1,2,3];
            let seperator = ', ';

            let actual = firstArray.join(seperator);
            let expected = '???';

            assert.deepEqual(actual, expected);
        });


        it('remove element at position', function () {

            let givenArray = [1,2,3,4,5,6];
            
            let idx = givenArray.indexOf(4);
            givenArray.splice(idx, 1)
            
            let expected = '????';

            assert.deepEqual(givenArray, expected);
        });


        it('forEach element do something', function () {

            let givenArray = [1,2,3,4,5,6];

            let sum = 0;
            givenArray.forEach(function(element, idx) {
                sum += element + idx;
            });
            let expected = '????';

            assert.equal(sum, expected);
        });


        it('forEach element call a func', function () {

            let givenArray = [1,2,3,4,5,6];
            function sumFunc(element) {
                sum += element;
            }

            let sum = 0;
            givenArray.forEach(sumFunc);
            let expected = '????';

            assert.equal(sum, expected);
        });

        it('is Array', function () {

            let givenArray = [1,2,3,4,5,6];
            
            let actual = Array.isArray(givenArray);
            let expected = '???';

            assert.equal(actual, expected);
        });


        it('check each element in array', function () {

            function isPositive(element) {
                return element >= 0;
            }
            let givenArray = [1,2,3,4,5,6, -1];
            let expected = '????';
            let actual = givenArray.every(isPositive)

            assert.equal(actual, expected);
        });
    });
});