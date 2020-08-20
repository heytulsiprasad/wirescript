---
title: "A List of Immutable Update Patterns that you can understand"
date: "2020-06-09"
description: "We learn Redux: Part 4. Basic examples on immutable update patterns, which is required to update data in a Redux store"
category: "Frontend"
keywords: "We Learn Redux, Redux, React, Immutable Patterns Redux, React-Redux"
banner: "./banner.png"
---

As promised, today we will learn how to update our state immutably when there are more complex forms of data types. By now, we are all familiar with basic Redux terminology like Actions, Reducer and Store and also we looked how those things work together in the very last post. So, now comes the most awaited part which we've discussed since the beginning, returning new state immutably.

# Things that we'll learn to do Immutably

✅ Adding items to an array

✅ Removing items from an array

✅ Mutation inside nested objects

So if I'll show you how to update the states immutably you might not remember that as well, so we'll not only see how to do it immutably but also how you would have done it otherwise.

# Adding Items to Array

```jsx
// ✨ describing the initial state for reducer
const initialState = {
  schools: [], // names of schools
};

// ✅ the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SCHOOL":
      let newSchools = [...state.schools];
      newSchools.concat(["Johns", "Saints", "Teresas"]);
      return { schools: newSchools };
  }
};

// ✅ lets say the data comes from an `values` property in actions object
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SCHOOL":
      let newSchools = [...state.schools, ...action.values];
      return { schools: newSchools };
  }
};

// 🚫 shouldn't update arrays like this
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SCHOOL":
      let newSchools = state.schools;
      // `.push` updates the newSchools as well as state.schools
      newSchools.push(["Johns", "Saints", "Teresas"]);
      return { schools: newSchools };
  }
};
```

# Removing Items from Array

```jsx
// ✨ describing the initial state for reducer
const initialState = {
  employees: ["Jonas", "Alan", "Martin"],
};

// ⚡ Let's say we get `index` of the to be removed employee through `action.id`

// ⚡ the reducer function
// ✅ using good old `.slice()` and `.splice()`
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_EMPLOYEE":
      let empList = state.employees.slice();
      empList.splice(action.id, 1);
      return { employees: empList };
  }
};

// ✅ yet another way using ES6 (...) operator
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_EMPLOYEE":
      let empList = state.employees.slice();
      empList = [...empList.slice(0, action.id), ...empList(action.id + 1)];
      return { employees: empList };
  }
};

// ✅ yet another way using `.concat()` method
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_EMPLOYEE":
      let empList = state.employees.slice();
      empList = empList
        .slice(0, action.id)
        .concat(empList.slice(action.id + 1));
      return { employees: empList };
  }
};

// ✅ yet another way using `.filter()` method
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_EMPLOYEE":
      let empList = state.employees.filter((emp, index) => {
        return index !== action.id;
      });
      return empList;
  }
};

// 🚫 shouldn't update arrays like this
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_EMPLOYEE":
      // note: we don't copy the employees array here (with .slice() like above)
      let empList = state.employees;
      empList.splice(action.id, 1);
      return { employees: empList };
  }
};
```

# Mutating Arrays inside Nested Objects

```jsx
// ✨ describing the initial state for reducer
const initialState = {
  person: "Jones",
  timeline: {
    months: [],
    years: [],
  },
};

// Let's assume we get the field we need to append with `action.field` which is either `months or years`
// Let's assume we get the data to append within `action.payload` which is an array

// ⚡ Adding items into arrays
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TIMELINE":
      let years = [...state.timeline.years, ...action.payload];
      return {
        ...state,
        timeline: {
          ...state.timeline,
          [action.field]: years,
        },
      };
  }
};

// Removing items from array can also be done similarly as shown above..
```

# Conclusion

I hope this gives you a clear and concise idea on how to update state immutably in Redux and also if you have time, I think you should check out various immutable libraries like [ImmutableJS](https://immutable-js.github.io/immutable-js/) or [Immer](https://github.com/immerjs/immer), coz they are time saving and helpful. I am not in the position though, to recommend you to use any of these, as I haven't used them yet and also particularly new to use them. You can see that for yourself, though. 👉

# What Next? 🎉

We have come a long way learning the nuances of Redux, thus without further ado we shall move on to use them with a FE library like React ⚛. I chose React because I have used it for several projects prior to this, but you can use Redux with other frameworks as well. Keep your fingers crossed, coz there's a lot coming! 🤞😃

![https://media.giphy.com/media/l1J3CbFgn5o7DGRuE/giphy.gif](https://media.giphy.com/media/l1J3CbFgn5o7DGRuE/giphy.gif)

I'm quite active on Twitter lately, so feel free to reach me [@heytulsiprasad](https://twitter.com/heytulsiprasad). 👋
