var assert = require('assert');

describe('datatypes', function () {
  describe('numbers', function () {
    it('whole numbers', function () {

      let firstNumber = 1;
      let secondNumber = 2;
      let actual = firstNumber + secondNumber;
      let expected = 3;

      assert.equal(actual, expected);
    });

    it('numbers with decimal point', function () {

      let firstNumber = 1.21;
      let secondNumber = 2.32;
      let actual = firstNumber + secondNumber;
      let expected = 3.53;

      assert.equal(actual, expected);
    });


    it('numbers with exponent', function () {

      let firstNumber = 2e0;
      let secondNumber = 2e-1;
      let actual = firstNumber + secondNumber;
      let expected = 2.2;

      assert.equal(actual, expected);
    });

  });

  describe('booleans', function() {

    it('truthy', function () {

      let myBoolean = true; 
      let actual = myBoolean;
      let expected = true;

      assert.equal(actual, expected);
    });

    it('falsy', function () {

      let myBoolean = !true; 
      let actual = myBoolean;
      let expected = false;

      assert.equal(actual, expected);
    });

    it('joined by && ', function () {

      let myBoolean = true && false; 
      let actual = myBoolean;
      let expected = false;

      assert.equal(actual, expected);
    });

    it('joined by || ', function () {

      let myBoolean = true || false; 
      let actual = myBoolean;
      let expected = true;

      assert.equal(actual, expected);
    });

    it('double negated', function () {

      let myBoolean = !!true; 
      let actual = myBoolean;
      let expected = true;

      assert.equal(actual, expected);
    });

  });

  describe('object', function() {

    it('comparison same', function() {

      let myObject = {};

      let equal = myObject == myObject;
      let expected = true;

      assert.equal(equal, expected);

    })

    it('comparison same again', function() {

      let myObject = {};
      let anotherObject = myObject;

      let equal = myObject == anotherObject;
      let expected = true;

      assert.equal(equal, expected);

    })


    it('comparison different', function() {

      let myObject = {};
      let anotherObject = {};

      let equal = myObject == anotherObject;
      let expected = false;

      assert.equal(equal, expected);

    })

    it('set properties', function() {

      let myObject = {
        name: 'peter',
        age: 12
      };

      myObject.age = myObject.age * 2;

      let actual = myObject.age;
      let expected = 24;

      assert.equal(actual, expected);

    })

    it('access & set unknown properties', function() {

      let myObject = {
        name: 'peter',
        age: 12
      };

      myObject.weight = myObject.height;

      let actual = myObject.weight;
      let expected = undefined;

      assert.equal(actual, expected);

    })
  })

    describe('array', function() {

      it('get and set', function() {

        let myArray = [1,2,3];
        myArray[1] = myArray[0] + myArray[2];

        let actual = myArray[1];
        let expected = 4;
  
        assert.equal(actual, expected);
  
      })

      it('get unkown', function() {

        let myArray = [1,2,3];
        let actual = myArray[5];
        let expected = undefined;
  
        assert.equal(actual, expected);
  
      })

      it('set unkown', function() {

        let myArray = [1,2,3];
        myArray[5] = 123;

        let actual = myArray[5];
        let expected = 123;
  
        assert.equal(actual, expected);
  
      })
  });

  describe('strings', function() {

    it('set and get', function() {

      let myString;
      let anotherString = 'def';
      myString = 'abc' + anotherString;

      let actual = myString;
      let expected = 'abcdef';

      assert.equal(actual, expected);

    })

    it('template string', function() {

      let myString;
      let anotherString = 'def';
      myString = `abc ${anotherString}!`;

      let actual = myString;
      let expected = 'abc def!';

      assert.equal(actual, expected);

    })

    it('access char', function() {

      let anotherString = 'def';
      let myString = `abc ${anotherString}!`;
      let actual = myString[2];

      let expected = 'c';

      assert.equal(actual, expected);

    })
  });

  describe('null && undefined', function() {
    it('are not the same', function() {

      let declared;
      let actual = typeof declared;

      let expected = 'undefined';

      assert.equal(actual, expected);

    })

    it('reset value by using null', function() {

      let myObject = {};
      let originalType = typeof myObject;
      myObject = null;
      let newType = typeof myObject;

      let actual = originalType ==  newType;
      let expected = true;

      assert.equal(actual, expected);

    })

    it('reset value by using undefined', function() {

      let myObject = {};
      let originalType = typeof myObject;
      myObject = undefined;
      let newType = typeof myObject;

      let actual = originalType == newType;
      let expected = false;

      assert.equal(actual, expected);

    })

  })

  describe('function', function() {

    it('is a type as well', function() {

      function myFunction() {}

      let actual = typeof myFunction;
      let expected = 'function';

      assert.equal(actual, expected);

    })

    it('is a type as well seriously', function() {
      let myFunction = function() {}

      let actual = typeof myFunction;
      let expected = 'function';

      assert.equal(actual, expected);

    })

    it('can be used as any other type', function() {

      let  add = function(a,b) { return a + b;}
      let  multiply = function(a, b) { return a * b;}

      let op1 = add;
      let op2 = multiply;
      let op3 = op1;

      let actual = op1(1,2) + op2(3,4) + op3(5,6);
      let expected = 26;

      assert.equal(actual, expected);
    })
  });
});