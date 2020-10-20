var assert = require('assert');

describe('controlstructures', function () {
    describe('if', function () {
        it('single', function () {

            let truthy = true;
            let actual;

            if (truthy) {
                actual = 123;
            }

            let expected = 123;

            assert.equal(actual, expected);
        });

        it('else', function () {

            let truthy = true;
            let actual;

            if (truthy) {
                actual = 123;
            } else {
                actual = 321;
            }

            let expected = 123;

            assert.equal(actual, expected);
        });

        it('nested', function () {

            let truthy = true;
            let stillTruthy = true;
            let actual;

            if (truthy) {
                actual = 123;
                if (stillTruthy) {
                    actual = 2222;
                }
            } else {
                actual = 321;
            }

            let expected = 2222;
            assert.equal(actual, expected);
        });
    });

    describe('switch', function () {
        it('simple', function () {

            let actual;
            let given = 123;
            switch(given) {
                case '123': actual = 'first';
                case "123": actual = 'second';
                case 123: actual = 'third';
            }

            let expected = 'third';
            assert.equal(actual, expected);
        });

        it('simple with break', function () {

            let actual;
            let given = 123;
            switch(given) {
                case 123: {
                    actual = 'first';
                    break;
                }
                case 123: { 
                    actual = 'second';
                    break;
                }
            }

            let expected = 'first'
            assert.equal(actual, expected);
        });

        it('simple default', function () {

            let actual;
            let given = 'no match';
            switch(given) {
                case 123: {
                    actual = 'first';
                    break;
                }
                case 123456: { 
                    actual = 'second';
                }
                default: actual = 1;
            }

            let expected = 1;
            assert.equal(actual, expected);
        });

    });

    describe('for', function () {
        it('single', function () {
            let actual = 0;

            for (var x = 0; x<10; x++) {
                actual += x;
            }
            let expected = 45;
            assert.equal(actual, expected);
        });
        
        it('double', function () {
            let actual = 0;

            for (var x = 0, y = 0; x<10 && y<20; x++, y+=2) {
                actual += x;
            }
            let expected = 45;
            assert.equal(actual, expected);
        });

        it('for in', function () {
            let actual = '';
            let myObject = {
                a: 12,
                b: 23,
            }
            for (var key in myObject) {
                 actual += key;
            }
            let expected = 'ab';
            assert.equal(actual, expected);
        });

        it('for of', function () {
            let actual = ''; // this is a string!
            let myArray = [2,4,6,8];
            for (var element of myArray) {
                 actual += element;
            }
            let expected = '2468';
            assert.equal(actual, expected);
        });

        it('for of again', function () {
            let actual = 0; // this is a number
            let myArray = [2,4,6,8];
            for (var element of myArray) {
                 actual += element;
            }
            let expected = 20;
            assert.equal(actual, expected);
        });

    });

    describe('while', function () {
        it('simple', function () {
            
            let actual = 0; 
            let myArray = [2,4,6,8,1,2,3,4,5,6];
            let i = 0;
            
            while (i < myArray.length) {
                 actual *= myArray[i];
                 i+=2;
            }

            let expected = 0;
            assert.equal(actual, expected);
        });
    });
});
