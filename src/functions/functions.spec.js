var assert = require('assert');

describe('functions', function () {
    describe('calling', function () {
        it('return value of a function not returning anything is ???', function () {

            function noop() {}
            
            let expected = '???';

            let actual = noop();

            assert.equal(actual, expected);
        });

        it('return value', function () {

            function returnRandomNumber() { 
                return Math.random(); 
            }

            let actual = returnRandomNumber();
            let expected = '???' < actual && actual < '???';

            assert.equal(true, expected);
        });

        it('return value exits the function', function () {

            function returnRandomNumber() { 
                return 123;
                Math.random(); 
            }

            let actual = returnRandomNumber();
            let expected = '???';

            assert.equal(actual, expected);

        });        
    });
    describe('interaction', function () {
        it('can access external variables', function () {

            var number = 432;
            function returnNumber() { 
                return number;
            }

            let actual = returnNumber();
            let expected = '???';

            assert.equal(actual, expected);
        });

        it('can shadows external variables with local variables', function () {

            var number = 432;
            function returnNumber() { 
                var number = 5432;
                return number;
            }

            let actual = returnNumber();
            let expected = '???';

            assert.equal(actual, expected);
        });

        it('can access shadows external variables', function () {

            // access number before number is declared
            function returnNumber() {
                number = 5432;
                return number;
            }

            // number is defined after the function has been defined
            var number = 432;

            let actual = returnNumber();
            let expected = '???';

            assert.equal(actual, expected);
        });


        it('has arguments', function () {

            var args = null;
            function returnNumber(num1, num2) {
                args = arguments;
                return num1 * num2;
            }

            returnNumber(1,2);
            let actual = Object.keys(args);
            let expected = '???';

            assert.equal(actual, expected);
        });

        it('can has many arguments', function () {

            var args = null;
            function returnNumber(...demo) {
                args = arguments;
                return demo[0] + demo[1];
            }

            returnNumber(1,2,3,'a', 'b');
            let actual = Object.keys(args);
            let expected = '???';

            assert.equal(actual, expected);
        });
    });

    describe('fun with functions', function() {
        it('self invocation', function () {

            let actual =  (function summer(...demo) {
                let sum = 0;
                for (var i of demo) sum += i;
                return sum;
            })(1,2,3,4,5)
            
            let expected = '???';

            assert.equal(actual, expected);
        });

        it('self invocation for initialization and data hiding', function () {


            function initCounter() {

                var internalCounter = 0;

                return function() {
                    return internalCounter += 1;
                }
            }

            let count = initCounter();
            count();
            count();

            let actual = count();
            let expected = '???';

            assert.equal(actual, expected);
        });
    });
});