---
title: "What is hoisting, from a beginners perspective?"
date: "2020-05-04"
description: "Learn what is hoisting, an often misunderstood but so easy concept in easy steps."
keywords: "Hoisting in Javascript, Hoisting for beginners, Hoisting is easy"
category: "JavaScript"
banner: "./banner.png"
---

Hey everyone! In today’s world of numerous libraries and frameworks and even subtle packages for almost anything, starting from frontend to backend and all using Javascript, there are lots of people who can miss out on such important topics as Hoisting.

Hositing, is a very common behaviour in pure Javascript. And before we go into any of its working, let me tell you, Hoist simply means to “raise (something) by means of ropes and pulleys”. Well, we aint gonna see any ropes or pulleys in JS, though!

When you carefully read the <a href=”[https://developer.mozilla.org/en-US/docs/Glossary/Hoisting](http://www.ecma-international.org/ecma-262/6.0/index.html)”>MDN documentation</a>, they say you’ll not find the term **Hoisting** used in any part of the official spec prior to <a href=”http://www.ecma-international.org/ecma-262/6.0/index.html”>ECMAScript 2015 Language Specification</a> and thus many known courses miss out on this. Its because hoisiting is known of as a thought process of how Javascript works under the hood and believe it or not this happens each time you render your website on your browser.

# I’m new. How does hoisting look like?

Lets move on with a code, shall we?

```javascript
welcome(); // "Hello World!"
console.log(lang); // undefined

var lang = "JavaScript";

function welcome() {
  console.log("Hello World!");
}
```

As you can see, we call our function `welcome` before even declaring such a thing but still it gives us the desired output. And in case of `lang`, it’s `undefined`. First let me tell you, `undefined` is a value in Javascript, and even without declaring `lang` undefined how come the browsers say it as so! This is the magic of **Hoisting.**

# What happens when you run your code?

Everytime you run your code, the JavaScript engine creates a brand new **execution context** that withhelds the information about the environment in which the current code is being executed. Now, you see an execution context is created in a two step process.

- Creation Process
- Execution Process

Its like, when you’ve finally bought your grocery from the store and first you’ve to cook what you wanna eat, then sit down to actually eat the food. So everytime you’re ready to watch your website, the JS engine runs and cooks it for ya! (i.e. creates the execution context)

**Remember**: The very first thing our Javascript engine does it to create a **_Global Execution Context_**, then as the engine parses further into our code, it creates a new execution context everytime another function comes up, its called the **_Functional Execution Context_**.

## Lets say we have the following code.

```javascript
var brand = "Ford";
var model = "Mustang";

carName(brand, model); // "Ford Mustang"

function carName(brand, model) {
  return brand + " " + model;
}
```

# The Creation Process

In this process, your browser sets up a bunch of things:

- The global object i.e. `window`
- The `this` keyword
- Link to its parent environment (only when creating local scopes)

Then, it parses through your code to see all the declarations of variables and functions. And finally, stores them to our **global object** or `window`, giving them a particular location in memory.

In our above code example, the creation process should look a bit like this.

```javascript
function carName(brand, model) {
  return brand + " " + model;
}

// variable declaration
var brand;
var model;
```

You can also say this process as the **Memory Creation Process.**

# The Execution Process

So as now we have access to all the created functions and variables that we declared in our code, we can start to execute our code line by line. This is where all the assignments to your variables take place and all the functions in your code start to run syncronosly.

In our above code, the execution process should look like this.

```javascript
// code as in creation process (memory is allocation is done)
function carName(brand, model) {
  return brand + " " + model;
}

var brand;
var model;

// execution process part
brand = "Ford"; // variable initialization or assignment
model = "Mustang";

carName(brand, model); // "Ford Mustang"
```

**Remember:** As said, when each function is invoked the JS engine creates a brand new **_Functional Execution Context_**. It has access to the global execution context also. If your code is executing in **_strict mode_** \*\*then value of `this` would be `undefined` or else it is the `window` object, in functional execution context.

# Major Caveats in Hoisting

## Functions come before Vars

For instance we have this code snippet.

```javascript

    function a () {
        var b;
        function c () {};
        var d;
    }

This upon hoisting, will get.


    function a() {
      function c() {};
      var b;
      var d;
    }
```

For more opinions on this, refer to this <a href=”https://stackoverflow.com/questions/28246589/order-of-hoisting-in-javascript”>stackoverflow answer</a>.

## Don’t confuse function declaration with function expression

In Javascript, we often use the function expression syntax, which is this way.

```javascript
var iAmExpression = function whateverItIs() {
  return "Zero. Zip. Nada.";
};
```

Where as, function declaration is the good old way of making functions, like this.

```javascript
function goodOldFunction() {
  return "Hip. Hip. Hurray!";
}
```

And when it comes to hoisting, the function declaration is hoisted to the top of their enclosing scope as explained above, but function expressions are not hoisted like that. They prefer to be hoisted as like variables, so it hoists the variable declaration, not the assignment part.

## A Gift of ES6

As of ES6 or ECAMScript2015 we have access to two more ways of creating variable, those are `let` and `const`. But unfortunately, the don’t follow the hoisting rules like `var`.

For example.

```javascript
console.log(fruit);
let fruit = "Apple";
```

or

```javascript
console.log(vege);
const vege = "Tomato";
```

What we get is,
` **Uncaught ReferenceError**``: Cannot access 'a' before initialization `

This is why they are called **Block level declarations**. This is evaluated during runtime itself and we can’t access the variable the JS engine evaluates its value where it was declared.

This behaviour is also known as, **Temporal Dead Zone**, which means the space between variable declaration and its initialization between which it can’t be accessed, and will throw a Reference Error if used.

More on this, at this <a href=”https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda”>blog post</a>.

# Let’s end this.

So as you’ve now understood one of the important concepts of how Javascript works, give yourself a pat on the back and go grab a cup of coffee or something, you deserve this! Take Care.

If you liked this post, you would love what I <a href=”https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda”>tweet</a>, as well! Let’s catch up!
