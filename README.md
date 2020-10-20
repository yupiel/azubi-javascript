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
<!-- -->
Javascript doesn't have datatypes in the traditional sense. There are a lot of implicit conversions going on in the background, so everything is *dynamic*.
Off the top of my head there are: Number, String, Boolean, Object, Array, and undefined.
Null exists but is treated as an object afaik

- what does coersion mean? Give me an example!
<!-- -->
Coercion is the name used for the system of automatic implicit data conversion in Javascript.

Now solve the test suite by fixing all the tests:

```npm run single -- datatypes```

2. Control structures
---------------------

- what control structures do you know?
<!-- -->
if/else if/else, for, (do) while, switch/case, with. I'm not sure if try/catch counts to this as well but I doubt it.

- given a loop that prints number from 1 to 5. Implement this with a for loop and a while loop.
```javascript
for(let i = 1; i <= 5; i++) { 
    console.log(i); 
}

let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}
```

- What is a fall-through in context of a switch statement?
<!-- -->
Fallthrough will execute all following cases in the switch statement after the first true case point until the next "break;" statement.

Now solve the test suite by fixing all the tests:

```npm run single -- controlstructures```

3. Arrays
---------------------

- what operations would you do with a list of elements? List them!
<!-- -->
push, pop, shit, unshift, length, delete, splice, slice, join, indexOf, isArray, and a whole bunch of others depending on use case.

- why do you think is this true ```typeof [] == "object"```? What makes an object an object in classical programming?
<!-- -->
Arrays aren't their own thing, they're just special types of Objects and therefore of the type "Object".
Objects provide a structure; can include properties that may be equal to any other data type (including other objects); encapsulate data for access protection.

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
```csharp
int Sum(int one, int two){
    return one + two;
}
```
```python
def sum(one, two):
    return one + two
```
```ruby
def sum(one, two)
  return one + two
end
```

- what is similar in all three implementations? what is different?
<!-- -->
All three implementation use paranthesis for parameters, a "+" for addition, and all of them use the return keyword to give back a result when calling the function.
While the first example (C#) has defined types, 2 & 3 (Python and Ruby respectively) don't define types for any of the parameters and no return type for the function.
2 & 3 are also missing {} brackets to define the scope of the function.

- explain variable shadowing. Give me an example!
<!-- -->
Variable shadowing occurs when a variable inside of a scope has the same identifier (name) as a variable outside of said scope.
The variable inside of the scope will then "mask" the outer variable, therefore "shadowing" it.
```python
someVar = 0

def someFunc():
    someVar = 1
    print(someVar)

print(someVar)
```
The inner print statement would print a "1" while the outer one would print a "0".

Now solve the test suite by fixing all the tests:

```npm run single -- functions```


6. Scope
---------------------

- What is the difference between declaration and definition? How does this relate to the concept of 'hoisting'. Explain!
<!-- -->
When declaring a variable, typically with 'let' or 'var' in Javascript, you're just noting it's existence and making sure that, for example, memory is allocated.
Once you assign a value to the variable you have defined it because now it doesn't just exist, it holds a value and is therefore "complete".

Javascript's hosting allows for the declaration of 'var' variables anywhere in the code, even *after* their definition.

- Watch https://www.youtube.com/watch?v=ZoFlcv2ByBo . done.

- What is hoisting again? What scopes does javascript use? List them!

Javascript's hoisting will take any 'var' variable declarations and "pull" them to the top of the document during interpretation. 
Definitions will be executed as they happen in the code.
This allows, as previously mentioned, for 'var' declaration to happen after their definition (when assuming top to bottom reading) in the code.

Javascript uses a global scope and a local scope.

Now solve the test suite by fixing all the tests:

```npm run single -- scope```


7. Prototypes
---------------------

There are many definitions of 'prototype': 1) an original model on which something is patterned, 2) a standard or typical example, 3) a first full-scale and usually functional form of a new type or design of a construction. For JavaScript the first one applies!

- What types of languages do you know. Try to find 3 groups.
Array Language (R)
CLI Language (bash, windows batch)
Compiled Language (C, C++, C#, ...)

- What are the main concepts of an object-oriented programming language?
<!-- -->
Inheritance - Subclassing relationships, sharing of functionality to reduce writing load.

Abstraction - Also exists as a programming principle so I'm not sure which one is meant here. I assume you're asking for the "only reveal relevant parts of the code for usage in other piece of code, not the implementation" kind of abstraction.

Encapsulation - Defined boundaries between classes with keywords like private and protected so outside classes are only able to use what they really *have* to.

Polymorphism - Possibility of objects to take on a different *form* when needed in the program, to reduce code duplication.

- every property of an js-object has to be stored in memory. Open your favorite browser and try to analyse the memory footprint of a website.
done.

Now solve the test suite by fixing all the tests:

```npm run single -- prototypes```