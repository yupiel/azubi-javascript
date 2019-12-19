Azubi-javascript
================

this is the missing repo to teach the core concepts about javascript

usage
---------

The idea is to have failing tests and the azubis have to fix them.

    npm install # once
    npm run all # to run the whole test suite
    npm run single -- <folder> # to run one specific suite


1. Datatypes
-------------

- what datatypes do exist in the programming language JavaScript?  List them!
- what does coersion mean? Give me an example!

Now solve the test suite by fixing all the tests:

```npm run single -- datatypes```

2. Control structures
---------------------

- what control structures do you know?
- given a loop that prints number from 1 to 5. Implement this with a for loop and a while loop.
- What is a fall-through in context of a switch statement?

Now solve the test suite by fixing all the tests:

```npm run single -- controlstructures```

3. Arrays
---------------------

- what operations would you do with a list of elements? List them!
- why do you think is this true ```typeof [] ==  "object"```? What makes an object an object in classical programming?

Now solve the test suite by fixing all the tests:

```npm run single -- arrays```


4. Objects
---------------------

- Objects are container elements are also known as map, hashmap or key-value pair. Not much to it :-)

Now solve the test suite by fixing all the tests:

```npm run single -- objects```


5. Functions
---------------------

- write a function in three different programming languages that returns the sum of two numbers, which have been given to the function as an argument.
- what is similar in all three implementations? what is different?
- explain variable shadowing. Give me an example!

Now solve the test suite by fixing all the tests:

```npm run single -- functions```


6. Scope
---------------------

- What is the difference between declaration and definition? How does this relate to the concept of 'hoisting'. Explain!
- Watch https://www.youtube.com/watch?v=ZoFlcv2ByBo . 
- What is hoisting again? What scopes does javascript use? List them!

Now solve the test suite by fixing all the tests:

```npm run single -- scope```


7. Prototypes
---------------------

There are many definitions of 'prototype': 1) an original model on which something is patterned, 2) a standard or typical example, 3) a first full-scale and usually functional form of a new type or design of a construction. For JavaScript the first one applies!

- What types of languages do you know. Try to find 3 groups. 
- What are the main concepts of an object-oriented programming language?
- every property of an js-object has to be stored in memory. Open your favorite browser and try to analyse the memory footprint of a website.


Now solve the test suite by fixing all the tests:

```npm run single -- prototypes```