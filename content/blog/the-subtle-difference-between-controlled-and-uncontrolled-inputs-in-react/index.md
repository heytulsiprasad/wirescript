---
title: "The subtle difference between controlled and uncontrolled inputs"
date: "2020-04-12"
description: "What is the difference between controlled and uncontrolled inputs in React? How to make forms in React using both Controlled and Uncontrolled input types. "
keywords: "Forms in React, Uncontrolled controlled components React, Refs in React, File in React"
category: "React"
banner: "./banner.png"
---

I was going through React ⚛ lately and recently I figured this thing about writing inputs who's mere logic in React was quite intimidating 😨 for me as I was coming from just HTML background and things were quite simple there, isn't it? 🤷‍♂️ This was the same question in my mind couple of days ago and in the midst of writing a post on CSS (which is upcoming next!), I pulled off some time to explain this simple but frightening at first process of React. 🥳

## 🧩 Why these concepts, at all?

I am sure, you might be thinking instead of just writing good-looking and semantic HTML like below, why shall we need to have these concepts, in the first place. 🙄

```html
<label> <input type="text" /> I 😍 HTML </label>
```

Earlier when we had the vanilla JS way of doing things as we used to select the classname of input element above and do our plain old job of getting its value from the target property inside event.

But about time we see how much important forms are for websites and almost every other website today has a call-to-action form intact so we needed to assert more power over the form inputs. 💪

![https://i.imgflip.com/2kuh6f.jpg](https://i.imgflip.com/2kuh6f.jpg)

## 🙋‍♂️ So how do I write a form in React?

As you might have seen, React has this feeling of having all HTML inside its body and it respects the writing language of the web 🕸 so it gives us two ways in which we can build forms, one the conventional way known as 🚩 Uncontrolled Inputs, other the powerful one called 🚩 Controlled Inputs.

👩‍💻 **ProTip:** You can understand with utmost clarity if you open your React dev tools ⚙ along side writing this code, so you can always refer them to know what current state is.

## 🍕 Uncontrolled Inputs

Grab a slice of pizza, coz it's gonna be over before you finish yours.

This is where we get to keep the traditional way of writing HTML inputs and guess what, it's pretty much the same as the above code snippet, refer below.

```jsx
    class Box extends React.Component (
    	render() {
    		return (
    			<label>
    				<input type="text" /> I 😍 HTML
    			</label>
    		);
    	}
    )
```

But there's one catch. How to access the input? React gave us a dope way of doing that too! 🥳

### 😎 Introducing Refs

> Refs provide a way to access DOM nodes or React elements created in the render method.

— [React Documentation](https://reactjs.org/docs/refs-and-the-dom.html)

So `ref` is nothing but an attribute like we had in HTML and it also provides a way for us to get access to the DOM so that we can get the user typed data from the input. Let's see how. 👀

```jsx
    class Box extends React.Component {
    	fluffy = React.createRef()

    	letsChange = () => {
    		console.log(this.fluffy.current.value) // input value gets logged
    	}

    	render() {
    		return (
    			<label>
    				<input type="text" ref={this.fluffy} onChange={this.letsChange} />
    				I 😍 HTML
    			</label>
    		)
    	}
```

- First things first, to be able to use `Ref` in your input you need to first initialize ref method in your class, by just calling `React.createRef()`. We named it `fluffy` here. 😺 We'll mention that inside our `ref` attribute inside input tag, like above.
- Then comes our evergreen method, `onChange` which is required whenever there is some kind of change.
- And lastly, inside `letsChange` which is called when there is some changes in input, we get the input value by `this.fluffly.current.value`. This gives us the text user typed, we can choose to use it however we want.

And this is all about, **Uncontrolled Inputs**. Did you finish your pizza, yet? 😏

## ⚡ Controlled Inputs

This gives all the power to your plain old input forms. This is the de facto standard of creating forms in React. It's called controlled in first place, because **we are controlling its state ourselves**. We need to store it's value inside the state object and keep it updated in real time as well, as the user types. So let's get our hands dirty now. 🙌

```jsx
class Box extends React.Component {
  state = { fluffy: "" };

  letsChange = event => {
    this.setState({
      fluffy: event.target.value,
    });
  };

  render() {
    return (
      <label>
        <input
          type="text"
          value={this.state.fluffy}
          onChange={this.letsChange}
        />
      </label>
    );
  }
}
```

Yes, we're now unstoppable. 🤙 Now let's understand the flow of the above process.

- As mentioned earlier, we store the text in our state itself, so we create a `state` object and store an empty key named `fluffy` which will store the user input as he types.
- Now what about change? So we pass a `onChange` attribute to input which calls `letsChange`. This is the callback which occurs first when user makes the tiniest of changes.
- Inside `letsChange` we are passing our all-time favourite argument `event` which is used to set the state so that we can see it on the screen.
- It's time to render what we stored in `fluffy` to the screen, so we create a `value` attribute in input tag as per HTML guidelines and store the `fluffy` value inside it.

Hence, this above process takes place everytime any change is made by the user, by mutating the state object. 🐨

![https://www.freecodecamp.org/news/content/images/2019/10/o60oxupyz8cfce0cknvz.png](https://www.freecodecamp.org/news/content/images/2019/10/o60oxupyz8cfce0cknvz.png)

## 🍟 Benifits of using Controlled Inputs

This method gives us enourmous control over the state, 💪 which in turn gives us power over the input. To see this, you can remove or comment out the `letsChange` function and try typing in the box? You'll see nothing get input! Why is that? 😲

It is such, coz the input box directly **renders the text stored inside state** which comes through the `letsChange` function. Hence, this system allows us to filter the values provided by the user before displaying on the screen itself. Let's say you want to do some sort of _custom validation_ for the user data, you can easily put the code into the `letsChange` function and see the magic. 💫

```jsx
// ...

letsChange = event => {
  let input = event.target.value;
  input = input.replace(/[0-9]/g, "");
  this.setState({ fluffy: input });
};

// ...
```

You'll not be able to input any numbers in the input, coz the `letsChange` function replaces them with empty strings `""` as soon you type something. You can also have a button which can be activated only if some specific conditions are satisfied. The possibilites are endless. 🤘

If that doesn't make sense, let me give you another example of this type. 💁‍♂️

Let's say we need a dropdown menu of various flowers 🌼 for user to choose from and this is how we write that.

```jsx
class Multiple extends React.Component {
  state = {
    flower: "",
  };

  letsChange = event => {
    this.setState({ flower: event.target.value });
  };

  render() {
    return (
      <label>
        Your Favourite Flower: 🌸
        <select value={this.state.flower} onChange={this.letsChange}>
          <option value="rose">Rose 🌹</option>
          <option value="sunflower">Sunflower 🌻</option>
          <option value="tulip">Tulip 🌷</option>
          <option value="hibiscus">Hibiscus 🌺</option>
        </select>
      </label>
    );
  }
}
```

In above example, if you try putting **any of the four values** that we gave in option in place of `flower` inside state then you'll see the default item selected will be that flower. You can manipulate the selection from `letsChange` function as well.

**P.S.:** There's this **file input tag** whose value is only read-only, 👀 so it is by default an uncontrolled component in React. Further reading on this, is mentioned below. Rest assured, you're good to go. 💙

![https://www.memesmonkey.com/images/memesmonkey/e6/e69c84649921fdbbfd57d85ce4a68212.jpeg](https://www.memesmonkey.com/images/memesmonkey/e6/e69c84649921fdbbfd57d85ce4a68212.jpeg)

## 📚 Further Reading

Instead of conclusion, I thought to give y'all some resources that I found helpful during writing this post, I'm sure they'll help you some way or the other. 🚀

- [Forms](https://reactjs.org/docs/forms.html) (React Docs)
- [Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html) (React Docs)
- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html) (React Docs)
- [The file input Tag](https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag) (React Docs)
