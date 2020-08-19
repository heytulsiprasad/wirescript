---
title: "Tell more story with Emojis 🐨"
date: "2020-04-29"
description: ""
category: "Web Developement"
banner: "./banner.png"
---

What emojis? What story can those mere doughnut shaped icons can give to my context? They are only meant to be used to make fun of someone over chat, (mostly by using 😅). No one tells a story using emojis, do they? Then what kind of weird ass story would that be?

Phew! Let me tell you something, **I was just kidding**. 🤷‍♂️

# 😏 Why is it so important?

Have you ever heard the phrase, **"A picture says a thousand words"**? This can't sound vague to you, but honestly when you look at a picture instead of reading just mere words it makes more sense, right? Somehow, you get an idea of what the context is going to be about or what the person implies.

We have every rules of grammar and vastness of vocabulary to express our feelings with literature, but nothing quite compares to how much you can explain with just a round shaped icon! 😏 See.

After all, its not about what you speak but how you speak, that matters.

![https://cdn.statcdn.com/Infographic/images/normal/17275.jpeg](https://cdn.statcdn.com/Infographic/images/normal/17275.jpeg)

# 😱 Where did my emoji's go?

Ha! You have this question, now! It's pretty easy with your everyday phones or tablets to access them, coz its right beside your touch keyboard, but it might be a mystery in laptops or computers.

### On Windows

Ah, you'll be amused if you didn't know earlier, its just a keyboard shortcut. 😅

First get to the place you want to insert the emoji, then its the **Win Key + ; (semicolon)** or **Win Key + . (fullstop).** A box with all your emojis opens up, start typing to match the emoji name.

### On Mac

I'm not a mac user, so if it works let people know it the comments. 😛

So, in the place where you want to input the emoji, use the keyboard shortcut **Command - Control - Spacebar** to access emoji. It'll open up a box full of emojis.

### On Linux

With the release of **Ubuntu 18.04 LTS**, you can use emoji's by just right clicking and select insert emoji or pressing **Ctrl + . (fullstop)** Also, there are other ways for older versions and all, if you want here is a [StackExchange answer](https://askubuntu.com/questions/1045915/how-to-insert-an-emoji-into-a-text-in-ubuntu-18-04-and-later) having all the ways.

# 💪 Gotcha! Now, where can I use them?

Almost everywhere I could say, but here are some everyday places where I use an emoji!

## In the Web!

Before I delve into this, I want to specify there are two ways in which you can get an emoji to the web. And they are,

- Through your Emoji Keyboard (or copying and pasting from emojipedia.com)
- Through a Unicode Codepoint

Unicode is the mother of encoding and representing all the characters on earth, you've ever seen! And as Emoji is nothing but a character, you can simply use its encoding, if not the character itself.

### Inside HTML

As you can see, we have used below the real Emoji (😍) from our keyboard in the first `div` whereas, in the second one we used it from a Unicode Codepoint. And you're right, writing codepoints sucks! But thats why we have a keyboard, right!

Okay, lets see how to write the codepoint. If you don't have a emoji keyboard or some other situation you want to use the Unicode directly, you can see the full list of all the emojis from the official Emoji charts. [Link to Full Emoji List.](https://unicode.org/emoji/charts/full-emoji-list.html)

Now, you can see the codepoint for our 😍 emoji is, `U+1F60D` which you got to copy and then replace the `U+` with some escape characters which are `&#x`. And end the string with a semi-colon `;`. Here we go. Our emoji is showing fine!

[https://codepen.io/tulsi-prasad/pen/RwWKwXq](https://codepen.io/tulsi-prasad/pen/RwWKwXq)

**P.S:** As all our emojis are coming under **UTF-8** character encoding, so if you're emoji isn't displayed somehow or you want to make things more robust, so you can add a `meta` tag with the charset. All you need to do is add, `<meta charset="UTF-8">` to your `<head>` tag and you're all set!

## Inside CSS

We can use it for many cool purposes, I'm going to show you two of them. Hold on! 😎

### Psuedo Elements with Emojis

You can see how the emoji is added inside `content` property of the pseudo selectors in the CSS. As said, they can be put anywhere like normal characters.

[https://codepen.io/tulsi-prasad/pen/OJyWVxg](https://codepen.io/tulsi-prasad/pen/OJyWVxg)

### Cursors with Emojis

I learnt it recently and it feels so awesome! 😍 You might already be knowing the `cursor` property in CSS, that can take values like `progress, pointer` etc, and also you can give a custom URL. This allows you to customize whatever you want as a cursor, it can be a picture or even emoji! 🙈

[https://codepen.io/tulsi-prasad/pen/wvKgKJY](https://codepen.io/tulsi-prasad/pen/wvKgKJY)

So, how did I get all the gibberish written inside `cursor: url()`! You guessed it right, there's a site called [emojicursor.app](http://emojicursor.app) which generates the emoji url for you! Gotcha? 🙌 You can just copy and paste it in your required element.

Also there's a hard way which is also awesome, but thats beyond the scope of this post. I found a great post on [CSS-Tricks](https://css-tricks.com/books/fundamental-css-tactics/using-emoji-cursors/) though, you can follow how from there.

### With JavaScript

As said you can use them alike characters wherever you want, either from its codepoint or by putting the icon. Well, here's one more example! 💁‍♂️

[https://codepen.io/tulsi-prasad/pen/abvpJXa](https://codepen.io/tulsi-prasad/pen/abvpJXa)

You can see in the **JS**, how we get the emoji from its codepoint. As said earlier, you can go to the unicode emoji list, but the only catch is that replace **U+** with **0x** this time. And write it like this. `String.fromCodePoint(0x1F4AA)`.

### Your very own Favicon

To begin with, Favicons are those small icons you see beside the title of your webpage, in the tabs area. It can be anything you want, however this is how you keep an emoji as a Favicon.

- Go, visit [Emojipedia](http://emojipedia.org)
- Search and find your favourite emoji
- Right click on your one and select **Open image in new tab**

![https://i.imgur.com/MIfaFh6.png](https://i.imgur.com/MIfaFh6.png)

- Copy the URL from the new tab with image
- And paste it in your HTML in this manner (ofc, give your own href 😅)

    <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/heart-with-arrow_1f498.png" />

## 🥳 Add emojis to your Git Commits

Ever wondered how the heck are we supposed to add emoji's to the git commits, like this?

![https://i.imgur.com/VneEWij.png](https://i.imgur.com/VneEWij.png)

This is one of the things I was very frightened about in the past, until I figured out it was so simple. So, the magic here is in Markdown. 💫

> Markdown is a lightweight and easy-to-use syntax for styling all forms of writing on the GitHub platform.

You can use Markdown in most places on Github, like Gists, Comments in Issues and Pull Requests or even in files with `.md` extension. So, your life is awesome now. Wait, is there any list of markdown form emojis? Absolutely.

This is a very concise guide to letting you know which emojis to add to your commit messages.

![https://res.cloudinary.com/practicaldev/image/fetch/s--UYW14KOX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/3692/0%2A9dJ2cGgDDZsOi0ec](https://res.cloudinary.com/practicaldev/image/fetch/s--UYW14KOX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/3692/0%2A9dJ2cGgDDZsOi0ec)
A snapshot from [gitmoji](https://gitmoji.carloscuesta.me/).

And this is a gist all kinds of emoji's markdown.

[Emoji's Markdown](https://gist.github.com/rxaviers/7360908)

**Last but not the least,**

## Custom Emoji's on Slack and Discord 🦜

Yaaaay! You can create a custom emoji and upload it to your channel by pressing **Add Emoji** from slack, and give it a name as you like. Guess what? There's a cool bunch of emoji's already on an awesome website called, **[Slackmojis](https://slackmojis.com/).** Discord, has a similar feature too.

This is a comprehensive guide for adding custom emoji's, if you're stuck somehow.

For [Slack](https://slack.com/intl/en-in/help/articles/206870177-Add-custom-emoji)

For [Discord](https://support.discordapp.com/hc/en-us/articles/360036479811-Custom-Emojis)

![https://cnet1.cbsistatic.com/img/LW-lRpQD0Mv0-pGZzUA0wvo6wT4=/940x0/2017/02/24/876bf3a5-6158-4297-82b5-ecffe5e7cf3f/slackmojis.jpg](https://cnet1.cbsistatic.com/img/LW-lRpQD0Mv0-pGZzUA0wvo6wT4=/940x0/2017/02/24/876bf3a5-6158-4297-82b5-ecffe5e7cf3f/slackmojis.jpg)

You're just a click away from adding them to your channels and planning your next party! 👯‍♂️🎉

## So, now? 🐒

Aha! Now its your turn to mess around with emojis and use them everywhere you can, coz they are awesome. It makes your content stand out of the crowd, with that pinch of emotion, which is hard with plain text. And also at times, when you don't want a realllly serious statement to look too serious, don't forget to grab one emoji at the end! 😛

Where else have you used emoij's in your workspace? 🤷‍♂️

I'm always upto something, on Twitter, [@heytulsiprasad.](https://twitter.com/heytulsiprasad) Lets grab a coffee! ☕
