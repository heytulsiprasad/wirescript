---
title: "The battle between Mutable, and Immutable data types"
date: "2020-06-06"
description: "We Learn Redux: Part 1. What are Mutable and Immutable data types in Javascript and how do they behave differently? This is most basic concept we'll use further while learning Redux"
keywords: "We Learn Redux, Mutable Types, Immutable Types, Javascript Types, Redux Immutable and Mutable Types"
category: "Redux"
banner: "./banner.png"
---

Hey fellas! I hope you're in best of mood and health to consume a quick snack of how JavaScript looks at its data types. I know it sounds like a bit out of the blue, but lately I was learning some basics of Redux and I found this pretty intimidating, so I thought to write a concise post of so.

# Data Types in JS

To begin with comparing mutable vs immutable data types, let us have a look on possible data types that we get to use in JS.

- null
- undefined
- boolean
- number
- string
- object
- symbol (a gift of ES6)

If you're thinking what about arrays and functions, let me tell clear the misconception.

**Functions** and **Arrays** are kind of a "**subtype**" of the data type **object**. It's just that functions have an internal **[[Call]]** property that allows it to be invoked (called) whereas **arrays** have access to a `.length` property which returns their length.

# Immutability is common

Immutable, as the name suggests, means can't be mutated (or changed). So you think why on earth can a variable's value be mutated, I mean that's what variables are for, right?

But there's a catch, **Immutability** in our context means that when you assign a variable to another using the assignment operator (=) then you can't change the initial variable's value when you change the value of the latter. For instance.

```jsx
var one = 1;
var two = one;

two = 2;
console.log(one); // 1
console.log(two); // 2
```

I hope by now you'd have come to realization how common and embedded this types of data are in Javascript. **So all data types, except objects, are Immutable,** which means you won't change the original variables value if you change the value of the one its assigned to.

**They are also called Primitive Values.**

# Mutability is Non-Primitive

As you might have guessed, **Mutable** data types are the ones whose initial values can be mutated (or changed) even after the variable is assigned to another variable.

**Note: Object** is the only mutable (non-primitive) value, however there are many subtypes of it, which you already know, like Array or Functions which also are **Non-Primitive** values. For instance.

```jsx
var numbers = [1, 2, 3];
var digits = numbers;

console.log(digits); // [1, 2, 3]

digits.push(4, 5, 6);

console.log(digits); // [1, 2, 3, 4, 5, 6]
console.log(numbers); // [1, 2, 3, 4, 5, 6]
```

You can see, how when we push something to the `digits` array, it also becomes available in the `numbers` array. Why so?

This happens because, **Objects** are **Reference Types** in Javascript. Now don't worry, all Mutable types are only known as Reference Types and nothing more. But here's why they're called so.

When you create a variable **(say** `a`**)** and assign it an object or array it gets stored at a particular memory location. However, when you create another variable **(say** `b`**)** and equate it to variable `a` **(**`b = a`**)** then it gets the memory location of `a` variable instead of a new copy of the object (or array). This is why objects are called Reference Types.

This is the reason, when you change `digits` array on our example, it also changes `numbers` array and vice versa. Its because our digits array point to the same location in memory that `numbers` array refers to. This is why these are called **Mutable Types**.

**They are also called Non-Primitive Values.**

# End Note

To conclude the above, we can say that **Immutable** data types are the ones which on being assigned to a new variable it returns a copy of the value, and the original value won't be changed if you fiddle with the new variable.

And **Mutable** types are the opposite, they are **Reference Types (Non-primitive)** which is why their original value gets changed once you change the value of its assigned variable.

So, now you've understood the concept, go around and google your curiosity out and also feel free to start a thread to discuss your understanding!
