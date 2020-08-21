---
title: "What is Redux and what Immutability has to do with it?"
date: "2020-06-07"
description: "We Learn Redux: Part 2. What is Redux in laymans terms? What is all the fuss about Actions, Reducer and Store along with illustations?"
keywords: "We Learn Redux, Real world Redux example, Why use Redux, Redux Actions Reducer and Stores"
category: "Redux"
banner: "./banner.png"
---

Lately I was doing a project to learn more about React and in the beginning I felt very good about React's component structure and everything was going awesome with passing props to various states and I was confident that I could make anything with it.

However, the main hurdle was yet to come. According to the project I needed to make an API call, on the press of the search button and also the API call needed to take place when the user selects something from the dropdown menu, which were on totally different components.

![https://i.imgur.com/6bf1Hyi.png](https://i.imgur.com/6bf1Hyi.png)

Although this seems easy, it was not, because we also need to render the results on the screen, right? 😂 Let me show you my folder structure so everything gets clear.

![https://i.imgur.com/zk4SLh0.png](https://i.imgur.com/zk4SLh0.png)

As you can see, I had my button component in `Buttons` folder, search bar in `SearchBar` folder and the entire search+dropdown components inside `SearchBox` and that is rendered in `Page.js` which is in an entirely different folder and then the data needs to reach `Cards` folder which creates cards for each food items and renders it to the screen, as such.

![https://res.cloudinary.com/practicaldev/image/fetch/s--klyBrIJG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/nz7y4z1v5edi5la06c3y.png](https://res.cloudinary.com/practicaldev/image/fetch/s--klyBrIJG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/nz7y4z1v5edi5la06c3y.png)

And I only knew how to pass props to a component, after watching one or two videos on YT. This was a nightmare. There has to be a better way to do this. And I found there are two, (or maybe more, I guess).

- Using Context API
- Using state management library, like Redux or MobX

Although, I used the first one because I knew this was a very minimal application and had not much data to pass through _(I'll blog about Context soon)_ but I knew there are libraries that are being used by heavier FE applications, which have lots of different states and props to pass and I always wanted to learn how that works. So I started to learn Redux.

# Why and What is Redux?

As you saw a real project based example above, where we could use Redux library to manage states for various components and finally be able to escape passing props manually to components, so I hope you got a good **why**.

According to our good old, Wikipedia,

> Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.

So, redux helps us to come out of this props drilling (going through various components to get data to different parts of components tree).

# Principles behind Redux

1. Redux believes on providing a, **single source of truth**, to the entirity of the application. You can take this as a global object, that provides the required state to each of the components.
2. The **state is read-only.** It can only be changed dispatching (sending off) an action.
3. The changes in the _single source of truth (redux store)_ is done by the reducer, which returns a new state after passing in the action object.

I know, the newer keywords like _store, reducer and actions_ might sound initimidating but trust me that was the same for me, a couple days back and after it became more clear I chose to write this post to make this clear for all of you.

# A little idea on the basics of a Redux app

So, if you're starting out on Redux, there's these three major things you need to know:

## Store

This is the root state of the entire application. Just think of this like a common state for all components in your app, and you can get the required data from this store at any point in your application, and best thing is you now won't need to pass all the local state data to another component through props, over and over again, solving our above use case.

## Reducer

### **What is a pure function?**

A function can be called pure function, when its return value is same for the same arguments and it consists of no side-effects, like fetching data from an API.

### **Why did I say this?**

Because our Reducer is a **pure function** and it takes in the \*previous state and **action\*** (an object) as arguments and returns the new state object. And no matter how many times you give the same set of arguments, you'll always get the same output from the function, and that's why they are sometimes referred to as **Deterministic functions.**

## Action

You heard this word previously a couple times maybe and probably expecting this to be something intimidating. But don't worry, its just an object, but it always has a `type` property on it.

```jsx
{ type: "INCREMENT", value: "anything" }
```

Above is the most basic structure of an action object, in which you'll find atleast a type property if not anything else. What it does is, it tells the Reducer what to do, but not how to do. The reducer will find out how to do on its own.

![https://i.imgur.com/k5eLelO.png](https://i.imgur.com/k5eLelO.png)

This illustration shows how the action which is triggered by the user on a specific component travels to change the global state of the application, or the Redux store.

The action object with its `type` property tells reducer on what to do, and reducer already knows what code to execute upon getting particular type of actions and it returns a new state which is then stored in the global store. You'll understand it with more details in upcoming blogs where, I'll show some code which will really make things more clear.

# What now, has Immutability to do with any of this?

So now you know the **Reducer** passes the new state to the Redux store, but the catch is, you need to make the new state Immutable before passing on to the store. But why? Because it has several benefits and advantages above the mutable way of doing things, such as:

- Tracking every single action to understand what caused a change in the store
- Travelling back in time of your application, so you can jump to a particular state easily.
- Easy to recreate so that you can report any bugs easily, as you can share the set of arguments that caused that new state
- This also makes your application more performant.
- Redux requires shallow equality checking and shallow checking requires immutability to function correctly.

### **Further Reading on Redux shallow equality checking**

[Redux](https://redux.js.org/faq/immutable-data#why-does-reduxs-use-of-shallow-equality-checking-require-immutability)

# What next?

We'll attach what we've learnt theoritically, in a practical approach through a project which will make all of this as clear as possible, so you can go ahead and use the best of state management to build the apps you've been waiting so long for.
