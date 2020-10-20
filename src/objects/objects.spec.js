var assert = require('assert');

describe('objects', function () {
    describe('keys()', function () {
        it('should return ??? of an empty object', function () {

            let givenObject = {};
            let actual = Object.keys(givenObject);
            let expected = '';

            assert.equal(actual, expected);
        });

        it('should return ??? of an object with keys', function () {

            let givenObject = {
                a: 12,
                b: '2345',
                c: true
            };
            let actual = Object.keys(givenObject);
            let expected = ['a', 'b', 'c'];

            assert.deepEqual(actual, expected);
        });
    });

    describe('actions', function () {
        it('access key of object', function() {

            let givenObject = {
                firstName: 'john',
                lastName: 'doe'
            };
            let actual = [givenObject.firstName, givenObject.lastName].join(' ');
            let expected = 'john doe';

            assert.equal(actual, expected);
        });

        it('access key of object alternative', function() {

            let givenObject = {
                firstName: 'john',
                lastName: 'doe'
            };
            let x = givenObject['lastName'];
            let y = givenObject['firstName'];
            let actual = `my Name is ${y} and a born ${x}!`;
            let expected = 'my Name is john and a born doe!';

            assert.equal(actual, expected);
        });

        it('adding new properties to the object', function() {

            let givenObject = {
                firstName: 'john',
                lastName: 'doe'
            };
            let x = givenObject['lastName'];
            let y = givenObject['firstName'];
            givenObject.fullName = x + ', ' + y;

            let actual = Object.keys(givenObject);
            let expected = ['firstName', 'lastName', 'fullName'];

            assert.deepEqual(actual, expected);
        });

        it('deleting properties of an object', function() {

            let givenObject = {
                firstName: 'john',
                lastName: 'doe'
            };

            delete givenObject.firstName;

            let actual = Object.keys(givenObject);
            let expected = ['lastName'];

            assert.deepEqual(actual, expected);
        });

    });
});