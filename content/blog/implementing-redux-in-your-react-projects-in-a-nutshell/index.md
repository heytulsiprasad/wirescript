---
title: "Implementing Redux in your React projects in a nutshell"
date: "2020-09-13"
description: "A non-intimidating approach to setting up the Redux boilerplate in a React project in an organized way, from scratch"
keywords: "Setting up Redux boilerplate, Adding Redux to React, Redux Thunk Middleware, Beginners Redux Setup"
category: "Redux"
banner: "./banner.png"
---

Despite the fact I'm learning authentication right now, Redux is something I can't easily get rid of from any of my React projects, as state management is so essential. And this time, when I set up Redux from scratch all by myself for a full stack project, I wanted to make a checklist or more of a reference on things we need to do while adding Redux to our projects.

# What it's not?

This post is definitely not a beginners guide to Redux nor a walkthrough to making a CRUD centric app using it. I'm only writing this because, I've written about Redux initially after a first look, but my opinions have changed since then, especially the way I used to use it.

Hopefully, this will be a checklist for anyone who wants to implement Redux, in an organised way. Feel free to establish your opinions in comments.

# Getting Started

To get started lets get a fresh project bootstrapped with the CRA template on our machine.

```bash
npx create-react-app redux-demo-setup
```

Now open it in your editor and continue walking through the post.

Well frankly, the first thing I do in my project after setting up, is **not** adding a state management library instantly, as it might be a overhead and slow down the progress at the beginning.

There are couple of ways to deal with initial state management like:

- Usual way of passing props
- React's own Context API
- Unstated, which internally uses context to manage state simply

But of course, I won't go over all those steps as you've come here to know how to setup Redux for your project.

### A quick one image recap on redux

![./redux-cycle.png](./redux-cycle.png)

A screen-cap from [Modern React with Redux](https://www.udemy.com/course/react-redux/).

# Where to start?

So basically, when we setup Redux in our application these are the things we are going to do.

- Setup a **global store**
- Having **multiple reducers** to update store object
- Make **action creators** to do specific things
- Adding a **middleware (like thunk)** for async actions
- Connect Redux to our application using **`react-redux` package**
- Including the **Redux Dev tools** snippet inside `createStore()` function

These are the steps we're going to take to complete our Redux setup.

# Installing necessary packages

Before we move any further I always want us to be on the same page, so let's start by installing all the packages we're going to need.

```bash
npm install redux react-redux redux-thunk
```

or

```bash
yarn add redux react-redux redux-thunk
```

# Creating `store.js`

The ultimate thing in Redux is it's store, this is where all the data lives. So let's start with that. In my projects, I want all my state management related files inside this directory, `src/redux` You can add everything inside just `src` folder but I like to keep it this way so it stays organised.

Create a file called, `store.js` inside `src/redux`.

```jsx
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// We'll make this file soon
import rootReducer from "./reducers/index";

const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
```

This creates the store for us by using the [createStore function](https://redux.js.org/api/createstore) straight out of `redux` . The root reducer is just the file which is going to combine all our reducers and we'll create it in next step.

The [applyMiddleware](https://redux.js.org/api/applymiddleware) function includes [thunk](https://github.com/reduxjs/redux-thunk) as a middleware and now we can use it in our action creators. And see how we add the `window.__REDUX_DEVTOOLS...` snippet, that's what will allow the famous Redux dev tools to run on our [browser extension](https://github.com/zalmoxisus/redux-devtools-extension) (as shown below).

![./redux-devtools.png](./redux-devtools.png)

# Creating Multiple Reducers and a Root Reducer

For this we're going to have a `reducers` folder inside our `redux` folder so we can keep all our reducers inside it. And we'll make an `index.js` file inside it to combine all the reducers and serve that to our `store.js` file above.

As we're not making any particular project here, so let's just create two dummy reducers for the sake of conveying the message, viz. `authReducer.js` and `errorReducer.js`. And also create the `index.js` to combine both of them.

Let's see how the `authReducer.js` looks like.

```jsx
import { SET_CURRENT_USER } from "./../actions/types";
import _ from "lodash";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !_.isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
```

Don't focus too much on the specifics of the reducer function, as it's just for the sake of visualizing how a reducer looks.

All we're doing here is importing a type from our `types.js` file which we'll make in a minute, `SET_CURRENT_USER` and returning a modified state when that action is dispatched.

Similarly, we have our `errorReducer.js` which you can make to handle errors inside action creators and so on.

Now moving on to **combining both reducers**, we'll shift to our newly created `index.js` file and this is what happens in there.

```jsx
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
```

So now, the state which results from `authReducer` can be accessed by `props.auth` in our component (we'll see how) and similarly with errors. As now we have our main reducers file working, we can import it in `store.js` without any errors.

# Creating our Actions and their Types

Now each time we need to execute or dispatch an action we shouldn't clutter that up on our React components, so we need to have them as action creators in a separate place which can be easily dispatched from any components.

As you might already know, we must have some types to pass into the dispatcher, so first we're going to create them in an organised way and not pass strings directly into types (as they're prone to error).

Create a file called, `types.js` inside `actions` folder, which is inside `src/redux` folder. This is what goes in there.

```jsx
export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
```

Keep in mind these are just some generic types, here you can add all the types according to your requirements.

Coming to actions, you can create any number of actions that you might need to access in your React components, such as for registering an user, logging in, logging out, fetching data and so on. However I'm just going to show you how you can structure your actions creators

```jsx
import axios from "axios";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Login - Get user Token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to local storage
      const { token } = res.data;

      // Set item to localstorage
      localStorage.setItem("jwtToken", token);

      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch({ type: SET_CURRENT_USER, payload: decoded });
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localstorage
  localStorage.removeItem("jwtToken");

  // Set current to empty object which will set isAuth to false
  dispatch({ type: SET_CURRENT_USER, payload: {} });
};
```

If you see carefully our action creators here are not simple functions, they are functions that return another function passing a parameter called `dispatch`. This is for the functionality that, **redux-thunk** gives us.

This is a very in-depth explanation regarding why you should use `redux-thunk` for making async action creators on stackoverflow, by our very own Dan Abramov.

[Why do we need middleware for async flow in Redux?](https://stackoverflow.com/a/34599594/11674552)

In a nutshell, you'll always want to approach asynchronous requests in our action creators with some kind of middleware like **[Thunk](https://github.com/reduxjs/redux-thunk)** or **[Saga](https://redux-saga.js.org/).** As otherwise, you'd have to clutter up your components by passing dispatch as a parameter to your action creators, which is not something your component should worry about. Again, the above post explains it much more clearly than I do.

# Connect Redux store using `react-redux` to application

This is where the package `react-redux` works. It assigns our `store` object to its [<Provider> API](https://react-redux.js.org/api/provider) which allows us to access the global store from any where within our application.

When I say _"you can access the store from anywhere within your application"_ doesn't mean that you should, but it's a matter of preference. I stick to making components which are separated into **container** and **components** folder inside my `src`. You might know them as **Presentational and Container** components and allow only the **container components** to access the global store and pass it down to presentational ones. You can read about this pattern from [Dan's Medium Post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

Alright, so this is how you'd add the store object to React-Redux's provider API in the root of your application. (I am using `App.js` here)

```jsx
import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
```

Make sure you wrap `Provider` around the entirety of your application, to access the store everywhere.

## Accessing state from components

Let's say we have a component, called as `Login.jsx` somewhere inside our application and we need to access the `auth` state from the global store object. So this is how we do that.

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { loginUser } from "./../redux/actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  // this.props.auth = {
  //		isAuthenticated: false,
  //		user: {},
  //	};

  componentDidMount() {
    // check if authenticated (then redirect to dashboard)
    if (this.props.auth.isAuthenticated) this.props.history.push("/dashboard");
  }

  changeHandler = e => this.setState({ [e.target.name]: e.target.value });

  submitHandler = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    // calling the action
    this.props.loginUser(userData);
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.submitHandler}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
```

I hope you've read the code completely. So, the couple of things to reflect on while accessing state and action creators in a component.

- Import `connect` from `react-redux`

```jsx
import { connect } from "react-redux";
```

- Import required action creators from where it was declared

```jsx
import { loginUser } from "./../redux/actions/authActions";
```

- Modify the `export default` line of your component and make it as shown

```jsx
export default connect(mapStateToProps, {
  /* action creators */
})(Login);
```

- Declare a `mapStateToProps` function, which gives access to our store object for everything that we need and includes them in our props.

```jsx
const mapStateToProps = state => ({
  auth: state.auth,
});
```

As you can see we accessed our `this.props.auth` in our `componentDidMount()` to see if the user's already authenticated so we can pass them to the `/dashboard` route, which is possible by `mapStateToProps` function.

- Passing action creators to the connect function

```jsx
export default connect(mapStateToProps, { loginUser })(Login);
```

Similar to `mapStateToProps` when we pass our imported action creators, `loginUser` in this case to the object as the second parameter inside `connect` we are allowing its access from the `props` directly. Thus, we can access it inside our `submitHandler` function, by calling `this.props.loginUser(userData)`. The `userData` is passed on as a parameter to that action creator.

## Removing Redux Dev Tools in production

This is a thing of preference. It is usually used in development and if you want to use it for production as well, make sure to check its [website](http://extension.remotedev.io) for reference on it and also I've heard this medium post [explains its use in production](https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f) pretty well.

Once I had a bug on production where my site didn't simple load and I was given a blank screen and later on realised that was due to this redux dev tools snippet which I forgot to exclude from my production build. This is how you can do that.

```jsx
const devTools =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middleware))
    : compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );

const store = createStore(rootReducer, initialState, devTools);
```

# Opinions are valuable

As ending this post, I'd like to say if you have any opinions make sure to share it in comments or send a tweet at [@heytulsiprasad](https://twitter.com/heytulsiprasad) so that it'd be helpful to all. Thanks for being with me this long, see you around! 🌠
