---
title: "The last piece of explanation on slice vs splice"
date: "2020-04-29"
description: "How to not get confused between Slice and Splice methods in JavaScript Arrays? Nice little trick to distinguish between both almost instantly."
keywords: "Javascript Splice, JavaScript slice, Splice vs Slice, Confusion Splice vs Slice"
category: "Frontend"
banner: "./banner.png"
---

Hey everyone! Hope y'all doing great! I was working with some array methods recently and I can't believe myself how many times I've googled about the confusion that comes from the `splice` and `slice` methods. It's pretty obvious that they have very distinct jobs to do, but not why they have such a similar name! And more than anything, even after months of writing the same methods I end up forgetting what they mean.

This is just my over-inquisitiveness, kicking my ass.

![https://res.cloudinary.com/practicaldev/image/fetch/s--0LhC6klz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/MnRCyPZ.png](https://res.cloudinary.com/practicaldev/image/fetch/s--0LhC6klz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/MnRCyPZ.png)

(I honestly don't know what caused that peak!) So, as of all things in my life, I sat down to make this simpler and to jot it down to my memory, once and for all.

# First things first

As all things in JS are mostly english, so let's know what both mean, literally!

## Slice

> "a thin, broad piece of food, such as bread, meat, or cake, cut from a larger portion"

![https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940](https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)

Don't grab your plates, we're not done here yet.

## Splice

> "a join consisting of two ropes, pieces of tape or timber, etc. joined together at the ends."

![https://upload.wikimedia.org/wikipedia/commons/0/03/Splice_%28PSF%29.png](https://upload.wikimedia.org/wikipedia/commons/0/03/Splice_%28PSF%29.png)

<figcaption>Photo Credits: [Wiktionary](https://en.wiktionary.org/)</figcaption>

And it's just a join among two things. Let's go nuts, now!

# What is array.slice?

It's simply a method on an array, like our good old `forEach` or `push`, etc. And it can be very useful for us, which will be obvious to you in a few seconds.

So, all that `slice` does is, create a new array for you from a pre-existing array with your desired length of values and return that for further use.

![https://i.imgur.com/95S77M9.png?1](https://i.imgur.com/95S77M9.png?1)

You'll need it when you'll want to **COPY your ARRAY.**

```jsx
let flowers = [
  "Rose",
  "Tulip",
  "Daffodil",
  "Sunflower",
  "Bluebell",
  "Snowdrop",
];
let yellow = flowers.slice(1, 4);

// yellow = ["Tulip", "Daffodil", "Sunflower"]
```

**NOTE:** To find out how many items the new array should contain, you can simply do (`end` - `begin`) which are the index passed into `slice` method.

### Aha moment?

Alright now after finally wrapping my head around it, I figured there's a cooler way to make things less confusing.

You see, `slice` method basically copies some elements out of an array for you and that's literally what slice means. It's just a copy of a smaller size from something bigger than itself and you can make lots and lots of these.

![https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940](https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)

Well, this can sound absurd to you and yes it is, but its actually nice of a way to make things easier for your mind to wrap around it.

# What is array.splice?

Chill! It's just another method. And you are going to need it when you will want to **modify an existing array**.

By modify, I mean you can change the constituents of an array by either **replacing its items**, and also you can **add new elements** wherever in the array you like!

![https://i.imgur.com/IPwpnFf.png?1](https://i.imgur.com/IPwpnFf.png?1)

You'll need it when you'll want to **EDIT your ARRAY.**

### Removes none and Adds Two

```jsx
let fruits = ["apple", "banana", "orange", "mango"];
let deleted = fruits.splice(1, 0, "pineapple", "jackfruit");

// deleted = []
// fruits = ["apple", "pineapple", "jackfruit", "banana", "orange", "mango"]
```

### Removes All starting from Index 1

```jsx
let fruits = ["apple", "banana", "orange", "mango"];
let removed = fruits.splice(1);

// removed = ["banana", "orange", "mango"]
// fruits = ["apple"]
```

### Removes Three from index 1

```jsx
let fruits = ["apple", "banana", "orange", "mango"];
let customRemove = fruits.splice(1, 3);

// customRemove = ["banana", "orange", "mango"]
// fruits = ["apple"]
```

### Aha moment?

You can clearly see, all that `splice` does is modify an array by joining some more elements inside it, anywhere you like and also throw some of them out. And this is literally what splice means and the picture says it all.

![https://i0.wp.com/www.hawk-hill.com/wp-content/uploads/2019/06/hh_add_cord_to_light_fixture_7.jpg?fit=992%2C480&ssl=1](https://i0.wp.com/www.hawk-hill.com/wp-content/uploads/2019/06/hh_add_cord_to_light_fixture_7.jpg?fit=992%2C480&ssl=1)

Photo Credits: [HawkHill](https://www.hawk-hill.com/)

# Off we go!

Cool! So, now you've got this great analogy that can differentiate the meaning of both methods to you and maybe save yourself a bit of time from Googling about this, next time!

_If you liked this post, you might love what I tweet as well. Lets catch up!_
