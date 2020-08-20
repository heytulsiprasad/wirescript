---
title: "Easy to Write Media Queries "
date: "2020-04-05"
description: "A easy and reliable way to write media queries using SASS variables, mixins and if directives in your frontend application, that is modular and \n reusable."
keywords: "CSS, Media queries, SASS variables, Mixins, If directives"
category: "Frontend"
banner: "./banner.png"
---

Hey everyone! 👋 I have finally managed to pull up some guts and courage to write and publish my first blog post. Anyways, I am ignoring all of the introduction stuff here, coz that's always available on my profile. You're more than welcome to hit me up.

## 🚩 Introduction

So, you're a web developer. 👩‍💻 Then you already know **writing media queries** can be _intimidating_, especially when there is a big project and there's a _lot of breakpoints_. Trust me, I know how you feel. And that's why you need a **foolproof and reliable** way of writing them, wherever and whenever you need them.

## 👀 What do we need?

Relax. This ain't rocket science. We will just use the wonderful mixins and some control directives provided to us by amazing SASS (scss) syntax.

![https://camo.githubusercontent.com/c5a4f32de41e04aba6b74c2df384c3934c5e19bf/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3232323036342f313034363936342f63326265363833652d313035312d313165332d393563302d6634303164653039636262662e6a7067](https://camo.githubusercontent.com/c5a4f32de41e04aba6b74c2df384c3934c5e19bf/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3232323036342f313034363936342f63326265363833652d313035312d313165332d393563302d6634303164653039636262662e6a7067)

### 🤷‍♂️ I am new to all these.

That's totally cool 🤙, so was I months ago. All you need to know is how to write css, coz that's what we are gonna do. So, **Sass** as I mentioned earlier is just css but with a some superpowers. Ever wondered if you could use **variables,** **nested rules**, or even **functions** inside CSS? That's what and more you can do with sass. Best part is, you can get started with SASS for free with their docs. 👇

[Sass Basics](https://sass-lang.com/guide)

## 💻 Getting Started

![https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif](https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif)

Enough of chatter let's start the fun. I'm gonna just show you how to transform the way of writing media queries to save some time. You can include it in your projects right away. I am assuming you already use **sass/scss** in your project and are familiar how to setup those things. Now we're good to go.

Let us begin with the `_mixins.scss` where we shall put all the nuances required for our media queries like **viewports**, **breakpoints** and some quirky scss.

```css
// respond is the name of your mixin

@mixin respond($breakpoint) {
  // $breakpoint is simply a variable that can have several values

  @if $breakpoint==tablet {
    // here `laptop` is the value of $breakpoint
    // when call laptop, we mean the following piece of code

    @media only screen and (max-width: 600px) {
      @content;
    }
  }

  @if $breakpoint==mobile {
    @media only screen and (max-width: 480px) {
      @content;
    }
  }
}
```

Now we will use those media queries in our `_layouts.scss` file, where we are styling a `.main` class.

```css
.main {
  background: red;
  // normal styling code here

  @include respond(tablet) {
    background: green;
    // responsive code for tablet viewport i.e. 600px
  }

  @include respond(mobile) {
    background: blue;
    // responsive code for mobile viewport i.e. 480px
  }
}
```

And that's a wrap. 🎉 This is all we need to do to write more reliable media queries and later on this code goes through your sass compiler and generates the following code. 👇

```css
.main {
  background: red;

  @media only screen and (max-width: 600px) {
    background: green;
  }

  @media only screen and (max-width: 480px) {
    background: blue;
  }
}
```

## 🙇‍♂️ Conclusion

You're now a master in writing realiable CSS media queries. This will save you ton of time if used to it's maximum and will no doubt give you a less confusing way to maintain your code. **Now, it's your turn to build something wonderful using this superpower.**

**_Let me know what you liked/disliked about the post down below._** 🤩
