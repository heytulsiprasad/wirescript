---
title: "Working of Garbage Collection in JavaScript: Under the Hood"
date: "2023-09-21"
description: "Understanding how the garbage collection algorithm in JavaScript works under the hood"
keywords: "Javascript Garbage Collection"
category: "JavaScript"
---

JavaScript is a wonderful language. Even after using it for years, there are still processes that happen under the hood, that most people don’t know/care about. Garbage collection is one of them. It is one of the most important parts of the language, but as JS is a garbage-collected language (memory is managed by JS engine automatically) we often ignore such beautiful inner- workings of the language.

### Table of contents

- [What is garbage collection?](#what-is-garbage-collection)
- [Memory management in JavaScript](#memory-management-in-javascript)
- [Structure of memory space](#structure-of-memory-space)
- [Garbage collection algorithms in JS](#garbage-collection-algorithms-in-js)
  - [Reference counting garbage collection](#reference-counting-garbage-collection)
  - [Mark & Sweep algorithm](#mark-and-sweep-algorithm)
- [Common leaks in Memory](#common-leaks-in-memory)
  - [Unexpected global variables](#unexpected-global-variables)
  - [Forgotten timers or callbacks](#forgotton-timers-or-callbacks)
  - [Out of DOM reference](#out-of-dom-reference)
- [Further Reading](#further-reading)

## 🗑️ What is garbage collection? <a name="what-is-garbage-collection"></a>

Every program runs with a certain memory which it uses to store its variables, function declarations etc. but at some point those entities might not be used anymore by the program and unnecessary storage of it causes memory consumption, which makes the app run slower. This is why we need, **Garbage Collection.**

Langauges like C exposes the properties like `malloc()` and `free()` to manually allocate and free up memory space from the program. But in JS it happens automatically, using algorithms we’re gonna see down below. Hence, **JS** is known as a **garbage collected language.**

![Throwing computer in trash](https://media.giphy.com/media/5eFp76zhsq3uw/giphy.gif)

## 🧠 Memory management in JS <a name="memory-management-in-javascript"></a>

Basically, memory management is the process of managing memory in a program and it’s job is correctly manage all the entities in a program to it’s respective types of storage, in return helping the program run faster.

The memory management has three steps in it’s lifecycle:

![Lifecycle of memory management](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/36jr2z170yz7b8o39sxr.png)

In programs of every language, these three steps are taken in respect to memory management.

1. **Allocate**: This allocates appropriate memory space to the respective entities. Manual memory managed languages like C and C++ do this manually.
2. **Use:** This step denotes the usage of entities stored in memory space.
3. **Release:** It denotes the release of a memory space used by an entity, after the entity is no longer used or is terminated. This step is done by garbage collection algorithms in JS.

## 🗼 Structure of Memory Space <a name='structure-of-memory-space'></a>

Before looking for solutions on how to handle garbage collection of JS, we need to know where does JS store it’s entities and how?

The JS engine is very smart in storing data. It segregates all of the entities in two types:

1. **Primitive data types** (string, boolean, number, undefined, null and symbols)
2. **Reference data types** (objects, arrays and functions)

![Classification of data types](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q1br0s2l3zpuq9ycqljd.png)

They both are stored in their own unique ways. In JavaScript data is stored between **Stack Storage** to store primitive values and **Heap Storage** to store non-primitive or reference values.

### 🧊 Stack Memory

This contains the primitive data types like string, numbers, boolean, undefined and null. These are also called as static data, hence the process of its allocation is called, static memory allocation. These values have a fixed amount of memory hence it’s called static data and are stored in stack memory.

Along with primitive values, stack memory also contains the reference to objects and functions.

![Representation of stack memory](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8opzclb2uzhkygjtmxdt.png)

### 🍃 Heap Memory

This type of memory is allocated dynamically as per need requires, hence it’s called dynamic allocation. These are also called reference data types and can store large values of variables. The size of this variable is known at the run time only. It has no limit to how much data can be stored.

💡 **Pro tip:** This memory can also have a limit but depending upon various factors like browser, OS or particular engine limitations. But you can check your memory availability as such:

```jsx
console.log(window.performance.memory.jsHeapSizeLimit); // 4294705152
```

The output might vary from person to person, for me it’s around 4.29GBs. But if you’re using something that big, there’s definitely a problem with your app.

![Reference types code example](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xq945u9b81jek6p357ik.png)

![Storing variables in stack and heap](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l6kjuzwfhb3zdacqfj2r.png)

## 🤖 Garbage Collection Algorithms in JavaScript <a name="garbage-collection-algorithms-in-js"></a>

As we now know how the memory allocation in JavaScript takes place and where all the data is stored, we can now think of how to empty memory which is not used anymore for a program. This process is called **Garbage Collection** and it’s done by a **Garbage Collector.**

In JavaScript it happens automatically using algorithms, hence it’s not always efficient depending on the type of algorithm and usecases, as we can’t always predict if some memory block is still in use in the runtime.

However, we’ll discuss some of the most important ones below.

- Reference counting garbage collection
- Mark & Sweep algorithm
- Generational collection

### #️⃣ Reference Counting Garbage Collection <a name="reference-counting-garbage-collection"></a>

This is a very simplistic garbage collection algorithm. It looks through the code for objects references and when a particular object is not referenced to anyone anymore and is not used by any other part of code, hence the algorithm cleans them up, freeing up the memory they were occupying.

We can understand it better from the below example.

```jsx
// Create object variable
let company1 = { location: "Mumbai" };

// Create references to same object
let workplace1 = company1;

// Clean references
workplace1 = null;
company1 = null;
```

Here, as we saw after assigning both `company1` and `workplace1` the value of `null`, we don’t have any reference to object `{ location: "Mumbai" }` hence, the reference to that object is lost and that memory is garbage collected.

### Limitations

Despite of the benefits however, we’ve a limitation of this algorithm. This doesn’t work where there are cyclic references. Example:

```jsx
let wild = { animal: "tiger" };
let domestic = { animal: "cat" };

// Create cyclic references
wild.member = domestic;
domestic.member = wild;

// Clean objects
wild = null;
domestic = null;
```

As in the above example, we used `member` property inside both objects `wild` and `domestic` to reference each other, but at the end we declared both objects to null, which leaves their member property to reference to each other, which is not accessible anymore too. This is why Garbage collection becomes difficult with Reference Counting GC.

**Note:** If we declared `wild` and `domestic` variables with `const` instead of `let`, then we’d have difficulty cleaning up those variables afterwards. This is because, `const` doesn’t allow us to modify the value of a variable after its creation, thus if you know that a variable should be garbage cleaned, then declare it with `let` or `var`.

This stackoverflow answer by YDKJS author, Kyle Simpson provides a better example of this ([here](https://stackoverflow.com/a/38318597))

## 🧹 Mark and Sweep Algorithm <a name="mark-and-sweep-algorithm"></a>

As we’ve seen the limitations of previous algorithm, we needed a solution to take care of Garbage Collection in cyclic dependencies. This is what Mark and Sweep Algorithm is good at.

This algorithm checks if a particular entity is reachable from the root of the environment. Example: In case of browser it is `window` and in case of NodeJS it’s `global`. This basically marks the objects that aren’t reachable as garbage and sweeps them later, simple as the name suggests. However, it doesn’t clean up the root objects.

According to MDN, all modern browser engines ship a version of mark-and-sweep garbage collector. Improvements have been made to this algorithm but not entire change of its idea.

![Tom cleaning floor](https://media.giphy.com/media/NV4cSrRYXXwfUcYnua/giphy.gif)

### Benefits

It resolves the problem with cyclic dependencies right away, as it marks every object starting from root and whatever's left unmarked, it sweeps (or cleans up) afterwards. Hence, there is never any unused values left eating up our memory.

### Limitations

- Even though it handles memory management all by itself, but it doesn’t exactly understand which memory is needed in future or not, hence JS apps can consume more memory than they actually need.
- As the algorithm decides when to clean up the marked garbage, your app can be slow or even run out of memory in certain situations (although its very rare)
- Hence it’s a good practice to use lower level languages with manual memory management, if you want your application to be as memory efficient as possible.
- As we have no control over the algorithm, it can decide when it has to run which can consume our good compute power, hence leaving our apps slower at times.

## 🚿 Common Leaks in Memory <a name="common-leaks-in-memory"></a>

Memory leaks is an inherent issue with programming languages, where a certain piece of memory is not required by the application but not returned to the operating system or memory pool. This can cause serious issues ranging from: high latency, slow compute or even crashes.

Certain programming languages provide features to manage memory manually but in JavaScript it happens automatically, so we’ve to avoid any situations where memory can be leaked to save us from excessive memory usage. Some of the most common leaks of memory are:

### Unexpected global variables <a name="unexpected-global-variables"></a>

This is the most easiest trap of leaking your memory. The garbage collector algorithm, parses through all the objects starting from the root in runtime. ie (`window` in browser and `global` in nodejs) and whatever references that are connected to the root object, will never be garbage cleaned. Hence we shall not put everything in global variables, especially if we don’t need to use it later.

Example scenario.

```jsx
function placesToVisit() {
  this.sites = ["Agra", "Maldives", "Alaska", "Los Angeles"];
}

// window.sites = ["Agra", "Maldives", "Alaska", "Los Angeles"]
```

In the above example, if you’d access `sites` from the window variable, you get the array of sites. But we only need that inside `placesToVisit` function. This is where memory can’t be cleaned even after termination of placesToVisit function, as sites is attached to window.

**NB:** If you want to prevent this, you can use `'use strict'` at the beginning of your JS files, in this way your JS will strictly parse your files and prevent unexpected global variables.

### Forgotten timers or callbacks <a name="forgotton-timers-or-callbacks"></a>

As we know there are various timers in JS, like `setTimeout` or `setInterval` that can keep running even after their desired work is over. Hence we need to handle those functions explicitly.

For example you have a weather app, which constantly needs to fetch latest weather (lets say every 5 seconds). Hence you write a setInterval which runs once each 5 seconds to fetch data and update your UI. But in case, the user navigates from weather screen to lets say some other page (lets say about) but the `setInterval` is still running, which is consuming your memory. This is a leakage of memory.

```jsx
const latestWeatherData = getWeather();

setInterval(function() {
	let home = document.getElementByClassName("home");

	if (home) {
		// Update the UI with the latest weather data
		home.innerHTML = JSON.stringify(latestWeatherData));
	}
}, 5000); // runs every 5 secs
```

In above example if home is removed from screen but the setInterval will still continue to run every 5 seconds, which is unnecessary. Hence to solve this and save memory, invocation of setInterval can be stopped using `clearInterval`.

```jsx
const latestWeatherData = getWeather();

let checkWeather = setInterval(function() {
	let home = document.getElementByClassName("home");

	if (home) {
		// Update the UI with the latest weather data
		home.innerHTML = JSON.stringify(latestWeatherData));
	} else {
		// When home is unmounted
		clearInterval(checkWeather); // stops execution of setinterval
	}
}, 5000); // runs every 5 secs
```

The same happens with DOM event listeners as well. As we write eventlisteners on some DOM element, it keeps on listening to that event forever. But what if the component is removed from UI, do we still need the listening? No right. In that case we need to remove the event listener to prevent memory leaks.

```jsx
let todo = document.getElementsByClassName("todos");

function clickHandler() {
  todo.style.textDecoration = "line-through"; // checks off todo
}

todo.addEventListener("click", clickHandler);
todo.removeEventListener("click", clickHandler); // removes listener upon unmount

// User wants to delete this todo
todo.parentNode.removeChild(todo);
```

Here, when todo is unmounted from UI, the `clickHandler` function also gets removed or garbage collected. In older browsers this used to be done as they couldn’t handle cyclic references well, but nowadays most browsers have this inbuilt feature to remove observers/event listeners by themselves.

### Out of DOM reference <a name="out-of-dom-reference"></a>

This is a type of memory leak when we keep a reference to a DOM element inside a data structure in our program but later on that component is them unmounted from the UI. Even though the DOM element is deleted, its stored in our memory.

```jsx
const allCars = [];
const cars = document.getElementById("#cars");
allCars.push([...cars]);

function removeElement() {
	allCars.forEach((car) => {
		document.body.removeChild(document.getElementById(car.id);
	})
}
```

In the above example, we remove all the cars from the UI, but we still have all the references to cars DOM inside `allCars` array. This is where memory leak occurs.

```jsx
const allCars = [];
const cars = document.getElementById("#cars");
allCars.push([...cars]);

function removeElement() {
	allCars.forEach((car, index) => {
		document.body.removeChild(document.getElementById(car.id);
		allCars.splice(index, 1); // removes car element from allCars at index
	})
}
```

Hence we should also clean up that array while removing DOM nodes in order to save leaked memory.

## 📒 Further Reading <a name="further-reading"></a>

Garbage collection is a vast concept in programming and due to the battle of performance these days, the algorithms keeps updating time to time. You can follow the blogs of different browsers engines to stay updated on their garbage collectors. Here are some of them that helped me clear my understanding while writing this in first place.

[Trash talk: the Orinoco garbage collector · V8](https://v8.dev/blog/trash-talk)

[Memory management - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

[A tour of V8: Garbage Collection](https://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection)

[Garbage collection](https://javascript.info/garbage-collection)

[Video from Arpit Bhayani about Mark and Sweep GC](https://www.youtube.com/watch?v=4qLf0FJMyf0)

[Mark and Sweep Garbage Collection Algorithm](https://www.youtube.com/watch?v=4qLf0FJMyf0)

![Aww](https://gifdb.com/images/high/patrick-star-aww-cute-reaction-59sv0me3f6z1jd1b.gif)

_If you liked this post, you might love what I share as well on [Twitter](https://twitter.com/thebuildguy). Let's catch up!_ 💖
