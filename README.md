# Javascript

The JavaScript Survival Guide is a primer for the so-called “weird” features of the language. These concepts are common pain-points for developers, but they become relatively simple when you understand relationship between your code and the JS engine. Not to mention, these topics come up frequently on JS interviews.


## Features of JS

* High-Level
* Single-Threaded
* Garbage-Collected
* Interpreted
* Just-In-Time-Compiled
* Prototype-Based
* Multi-Paradigm
* Dynamic Langauage
* Non-Blocking Event loop

#### All research this section is based on the guidance from Mozilla - the holy grail of JS documentation.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

#### Primitive vs Object

The lowest level building blocks in JavaScript are primitives, which include: undefined, null, string, number, bigint, boolean, and symbol. All primitives are immutable.

Anything that is not a primitive is an Object, or a descendant of it. Objects are collections of key/value pairs and used as the building block for more complex data structures. Here are a few examples:

```
    index.js
    typeof  23; // number
    typeof "foo" // string
    typeof null // null

    typeof {} // object
    typeof [] // object
    typeof function() {} // function (which inherits from object)
```
    
 ## Truthy vs Falsy
   When a value is encounted in a Boolean context - such as an if statement - it will be coerced into a boolean. If the result is true      then the value is truthy and vice versa. If you’re unsure about a value, you can convert it using the logical ! NOT operator twice,      or a double-bang as I like to call it !!.

```
   index.js
    true; // true
    !! "hello"; // true
    !! -1; // true
    !! []; // true
    !! {}; // true

    false; // false
    !! null; // false
    !! undefined; // false
    !! 0; // false
    !! ""; // false
```
 ## Hoisting
 
   Hoisting means that your declarations, i.e. functions and variables, will always be placed in memory at the top of the execution        context.

   Notice how the function below can be called before it’s actually declared. That’s hoisting in action.

   index.js
   // hoisting is as if your `function fun() {}` was located here. 

    fun(); // works. 

    function fun() {}
    
 ## Closures
 
   What is a Closure? Here’s a quick and simple definition that makes sense to me (although “lexical environment” would be a more        accurate than function):

   A function within a function, where the outer function’s local variables remain available in memory after creation.

   If you come from an classical OOP background, you may notice how closure is very similar to a class instance with properties and methods.

   Notice how outer contains a local number variable, while inner increments it. Even though outer is only called once, we can still access the count because JS “closes over” the inner function to preserve the execution context.

```
   closure.js
         
    function outer() {
    const count = 0; // persits in memory after outer is popped off the call stack
    function inner() {
        count++;
        return count;
    }

    return inner;
}

// Creates the Closure

     const addOne = outer();

// Operates within its context or lexical environment
      
    addOne(); // 1
    addOne(); // 2
    addOne(); // 3
```

## Event Loop

* Runs synchronous code
* Runs the promise or microtask 
* Runs the synchronous code  ``` SetTimeouts and Dom api's ```


## Object

* Object.create   ```var person2 = Object.create(person1);```
* Object.hasOwnProperty   ``` if (obj1.hasOwnProperty(`${data[0]}_${data[1]}`)) ```


## Functions

Functions are the backbone JavaScript of development, but perhaps the most difficult concept to master. The following section defines key concepts related to JS functions with practical examples that you can try on your own.

### Anatomy of a Function

A function is piece of code that can be called durning the lifecycle of the app to perform a task or return a value. A function declaration can be broken down into the following pieces.

* Name.
* Parameters. A list of inputs that can be passed into a function.
* Body. The logic or statements that perform the computation.

### JavaScript function declaration

   A function declaration on its own does not do anything. You make use of functions by calling them. The return value of the function can be assigned to a variable.

#### Function call. 
   Executes the code inside the function body.
   
#### Arguments.
   The values to bbe used as parameters in the function.
   
#### Return value. 
   By default functions will return undefined, but can return the result of a computation when the body contains a return statement.
  
  
## JavaScript function call

### Function Declarations vs Expressions
   
A function declaration is a statement that describe what your code does. Declarations are hoisted, which means they are loaded at the top of the scope before any other code runs.

```
    fun.js
    makeBread(2); // Call still works here

    function makeBread(qty) {
        return '🍞'.repeat(qty)
    }
```
    
An alternative approach is use a function as a value or expression by assigning an anonymous function to a variable or parameter.

```
const makeBeer = function(qty) {
    return '🍺'.repeat(qty);
}
```

While not common, it is possible to also assign a name to a function expression

```
const makeBeer = function beerFun(qty) {
    return '🍺'.repeat(qty);
}
```

### 🤔Should you use declarations or expressions?
 
There is no universally accepted best-practice, but function expressions are commonly preferred for (1) their ability to be reassigned, (2) flexibility when composing higher order functions, and (3) the fact that they don’t pollute the global scope.

## Parameters and Arguments
     
   You have a variety of ways to structure parameters in a function. Below are examples of positional, named, and rest parameters:
```
fun.js
// Positional
function makeBreakfast (main, side, drink) {
    console.log(arguments)
    return `Breakfast is ${main}, ${side}, and ${drink}.`;
}

// Named
function makeLunch (opts) {
    const { main, side, drink } = opts;
    return `Lunch is ${main}, ${side}, and ${drink}.`;
}

// Rest params
function makeDinner (main, ...args) {
    console.log(main, args)
    return `Dinner includes ${main} and ${args.join('')}.`;
}

makeBreakfast('🥞', '🥓', '🥛');

makeLunch({ main: '🥙', side: '🍟', drink: '🥤' });

makeDinner('🍜', '🥘', '🍙', '🥠', '🍑');
```

## Arrow Functions

Arrow functions provide syntatic sugar for writing compact code, while also omitting a new this object, which solves common pain points when writing object-oriented code. An arrow function is unique because it:

* Does not have its own this object.
* Implicit return value when brackets are omitted. i.e. () => true returns true.
* Always an expression, never a statement.
```
fun.js
const makeBeer = function beerFun(qty) {
    return '🍺'.repeat(qty);
}

const makeWine = (qty) => '🍷'.repeat(qty);
Pure Functions
A pure function is one that only relies only its inputs, produces no side effects, and does not modify values outside its local scope.

Notice how the impure function below mutates a global variable and uses it to calculate the return value. In other words, it depends on values outside of its own function parameters and/or body.

fun.js
let global = 0;
const impure = () => {
    global++;
    return global ** 2;
}

const pure = (x) => x ** 2;
```
## Higher Order Functions
A higher order function is created by combining (or composing) multiple functions together by passing (1) functions as arguments or (2) returning functions. There are many built-in JS functions that use HOF, for example setTimeout and Array.map.

```
fun.js
// Anonymous
setTimeout( () => console.log('hello!'), 2000);

// Named
const log = () => console.log('hello');
setTimeout(log, 2000);

// Array Map
[1,2,3,4].map(v => v ** 2);
🤔 Should you use declarations or expressions?
```

## Recursive Function

A recursive function is one that calls itself from inside its own function body. If a terminating condition is not provided it will create and infinite loop. Recursive functions are commonly used in algorithm implementations to efficiently handle tasks like binary-tree traversal. Below is an example of a recursive function that traverses the the file system using NodeJS.
```
fun.js
const fs = require('fs');
const { join } = require('path');

const traverse = (dir) => {

    const subfolders = fs.statSync(dir).isDirectory() 
                       && fs.readdirSync(dir);

    if (subfolders) {

        console.log('👟👟👟 Traversing ', dir);

        subfolders.forEach(path => {
            const fullPath = join(dir, path);

            traverse( fullPath );

            
        });
    }

}
traverse( process.cwd() );
```

### When should you Write Functions?

When building an app, you will often ask yourself should I write a new function for that?, but the correct answer is nuanced and highly-subjective. A common acronym in programming is DRY and is aimed at avoiding duplication:

### DRY Do Not Repeat Yourself

Find yourself writing repetitive code? Try abstracting it into a custom function. Sounds simple enough, but you should not take DRY to the extreme. If you find yourself having a difficult time coming up with readable function names, it probably means your are over-optimizing and starting to build your own complex framework of abstractions - possibly a much worse situation than duplicated code. People have recognized this issue and counter DRY with WET.

### WET Write Everything Twice, but not Thrice

In this world, we only break down code into custom functions when it is duplicated more than twice. The rational is that it provides more confidence that this extra layer of absctraction is actually required. As programmers, we often try to optimize too early because we’re terrified of duplication.

#### In brief, both DRY and WET are useful principles, but neither are perfect - it just takes practice.
