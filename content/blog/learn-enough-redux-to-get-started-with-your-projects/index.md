---
title: "Learn enough Redux to get started with your projects"
date: "2020-06-08"
description: "We Learn Redux: Part 3. Learning how to implement Redux in projects, along with Redux APIs like createStore and how to create a Reducer function and Action Object in Redux"
keywords: "Redux Reducer Function, Redux Action Object, How to add Redux to projects, We Learn Redux"
category: "Frontend"
banner: "./banner.png"
---

Alright, as promised we'll look into some code now, but this time we'll master the most basic methods and processes that are used by Redux to manage our state efficiently, before implementing it in our FE applications.

As I said, this is a learning series of posts that I am writing currently while learning to master Redux, so that you could learn with consuming the right amount of content from the start (if you're particularly new to this), without getting intimidated by building a working frontend app with React and Redux, right away. At least, that's not how learning for me takes place. ✌️

# What Redux has to offer?

To make things simpler, let me tell you an outline of what we're going to learn today.

✅ To create the global store, that holds the complete state tree in our app

✅ Use various store methods to create, read and update our store.

✅ Basic ways to update our state in Immutable way

# Including Redux to our project

0️⃣ Step Zero, create a file (say `sandbox.js`) to fiddle along with. We'll use `node` today to run the commands, instead of diving into any frontend framework. (so, install node, in not already)

Now, first of all, run this command to get redux from npm. `npm install redux` or `yarn add redux`

Then, we'll import Redux to our JS file to with the `require` command.

```jsx
const redux = require("redux");
```

Note, we're not using the `import {} from ""` to include packages as we're not using Babel or anything like that to compile our ES6, its just plain JS.

# `Redux.createStore()`

Let's create the global store that we're talking about, that holds the complete state tree of the application. Most importantly, there should be just one `store` throughout the app.

```jsx
const createStore = redux.createStore;

// We'll create the Reducer here, before writing `reducer` inside createStore
// Creating this just so that you won't get a reference error
const reducer = () => {};

const store = createStore(reducer);
```

This **returns** what we know as the store. We can only change that by dispatching actions, through a reducer, more on this below.

**Note**: The `createStore` we wrote above is in its most basic form, but it can take more arguments than that, which can be useful in more adv usecases, beyond our scope here.

The actual skeleton for `createStore` is:

```jsx
createStore(
  reducer,
  [preloadedState], // optional
  [enhancer] // optional
);
```

- **`reducer`**: It is a function here, passing which is mandatory to create the state. This function is the only point of contact with the store which can change the state object.
- `preloadedState`: It is the initial state, however it is optional.
- `enhancer`: It is optional and is a function. It is used to enhance the store with third party capabilities like middleware etc.

More on `createStore`: Redux docs

[Redux](https://redux.js.org/api/createstore)

## Quick Tip:

You can run the command `node <filename.js>` anytime, along with some console logs anytime between writing this codes, so that'll fortify your understanding.

Running, `node <filename.js>` now, will result in following message:

```jsx
{
  dispatch: [Function: dispatch],
  subscribe: [Function: subscribe],
  getState: [Function: getState],
  replaceReducer: [Function: replaceReducer],
  [Symbol(observable)]: [Function: observable]
}
```

Don't be scared, these are just some of the methods available on the store which we'll explore soon.

# Building the Reducer Function

As discussed many times, prior to this, Reducer is the function that `createStore` accepts as a parameter in it and through which we can modify our state efficiently. This accepts the previous state and an action that tells which set of actions to do and returns the new state immutably, which goes on to modify the Redux store.

We are going to make a simple yet classic calculator application, that can do basic math operations. This will help to understand Redux better.

As the reducer function takes in the previous state as an argument, lets create an initial state that'll be the default state if not anything else is passed.

```jsx
let initialState = {
  counter: 1,
};
```

Now, let's create a Reducer, which receives the action object and prepares the new state to pass onto Redux store.

```jsx
const reducer = (state = initialState, action) => {
  // passing initialState as the default state here

  switch (action.type) {
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "SUBSTRACT":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "MULTIPLY":
      return {
        ...state,
        counter: state.counter * action.value,
      };
    case "DIVIDE":
      return {
        ...state,
        counter: state.counter / action.value,
      };
    default:
      return state;
  }
};
```

**Note:** Watch how the new state is returned immutably, using the ES6 spread operator (...), and not in any other mutable way, like this.

```jsx
// 🚫 shouldn't return state in reducer like this

const newState = state;
newState.counter += 1;
return newState;
```

### How we can return state immutably?

```jsx
// ✅ should return state in reducer like this

return {
		...state,
		counter: state.counter + 1
}

// ✅ also possible using ES6 Object.assign()

return {
		Object.assign(
			{},
			state,
			{ counter: state.counter + 1 }
		)
}
```

**PS:** For now, we only need this much, however we'll learn different immutable update patterns of state in the upcoming post.

# Creating an Action Object

Actions are the only source of information that sends data from your application, to the store. These are simple JS objects that has at least a `type` property which holds a string which tells the Reducer what to do, and then the reducer returns a brand new state.

```jsx
// An example of an action
{ type: "ADD", value: 5 }
```

This is the basic most way to declare an action, but however as it's most important property `type` which is a string and can be easily mistyped by us humans. Resulting in hours and hours of debugging, so we store it in a variable, which on being misspelled our linter throws an error and we can catch the error easily. This is how its done.

```jsx
const ADD = "ADD"
{ type: ADD, value: 5 }
```

# Learning how to use various Store methods

We are going to use the following store methods to help us manage state efficiently.

☑️ `store.dispatch`

☑️ `store.getState`

☑️ `store.subscribe`

## Running our First Action Ever

This is how we are going to signal the reducer that there's a change in any UI component or anything that needs the global store object to change, and you pass the correct type command so that the reducer returns the correct new state. This is how its done.

```jsx
// we'll dispatch an add action
store.dispatch({ type: "ADD", value: 1 });

// lets check the current state
console.log(store.getState()); // { counter: 2 }
```

So now you know, how to dispatch an action to the store using `store.dispatch()` command and how to get the current state object from the store using `store.getState()`. This is amazing.

Now, just think how many times shall we console.log the `getState` command to check the current state! Pretty boring, isn't it? That's why we have a `store.subscribe()` method.

This accepts a callback function which executes everytime the store is modified (or updated). Here's how you can write this.

```jsx
// writing a subscribe method
store.subscribe(() => {
  console.log("Store:", store.getState());
});
```

**NOTE:** Make sure you keep your `subscribe` method above the `dispatch` method so that it shows up everytime you dispatch an action.

## Writing actions in a better way

```jsx
// using variables to store strings is better than using
// strings directly on the action object for error handling purposes

const ADD = "ADD";
const SUBSTRACT = "SUBSTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

// writing a function for each of the action to makes it convinient
// to include inside dispatch method

function toAdd(val) {
  return { type: ADD, value: val };
}

function toSubstract(val) {
  return { type: SUBSTRACT, value: val };
}

function toMultiply(val) {
  return { type: MULTIPLY, value: val };
}

function toDivide(val) {
  return { type: DIVIDE, value: val };
}

// calling dispatches

store.dispatch(toAdd(12)); // Store: { counter: 13 }
store.dispatch(toSubstract(7)); // Store: { counter: 6 }
store.dispatch(toDivide(3)); // Store: { counter: 2 }
store.dispatch(toMultiply(6)); // Store: { counter: 12 }
```

Now running `node <filename.js>` gives the following output:

```bash
Store: { counter: 13 }
Store: { counter: 6 }
Store: { counter: 2 }
Store: { counter: 12 }
```

# What next?

As this was a pretty much simple calculator app, so we didn't require any complex data types in our store and so didn't quite explore different ways to return states immutably from the reducer. So we'll keep that for the next time.

![https://media.giphy.com/media/KctrWMQ7u9D2du0YmD/giphy.gif](https://media.giphy.com/media/KctrWMQ7u9D2du0YmD/giphy.gif)

I'm quite active on Twitter, lately. Tweet me, [@heytulsiprasad](https://twitter.com/heytulsiprasad).
