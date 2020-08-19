---
title: "Make your CSS production ready by creating a build process"
date: "2020-04-08"
tags: "webdev, codenewbie, beginners, css"
description: ""
category: "Web Developement"
banner: "./banner.png"
---

Hey everyone! 👋 You know, most of my time as a beginner I just used to write plain CSS and never really think of what happens next? Like, how can we finetune our designs so that its compatible for any type or versions of browsers out there as well as load up faster than always? Wouldn't that be cool? 🤷‍♂️

## 🚩 Introduction

Hell yeah, that would be cool. 😎 So this is gonna be about **fine-tuning your css** designs in a manner that would make your **pages load faster** 🚀 as well as make your designs all **browser compatible**. 💻 And by all means, make your CSS production ready for getting the best out of your CSS. 🎉

![https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8dfc9ac6-7677-4770-9c98-5dd1eee56e6f/css-important-meme.png](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8dfc9ac6-7677-4770-9c98-5dd1eee56e6f/css-important-meme.png)

## 👀 What do we need?

We are going to install a couple packages from npm, for which you need to have node installed. If that's not done, do it from [here](https://nodejs.org/en/download/) now. Also if you're dizzy, grab a **cup of coffee** and you're good to go. ☕

## 📌 Installing Dependencies

Let's start a new project using `npm init --y` ('y' is for default values).

The dependencies that we are going to install (as devDependencies) are,

- **node-sass** (used to compress our css and also to compile .scss to css, if needed)
- **concat** (used to concatenate multiple files)
- **autoprefixer** (used primarily in prefixing css tags automatically)
- **postcss-cli** (autoprefixer is a plugin of postcss, so this is also required)
- **npm-run-all** (a CLI tool to run multiple npm-scripts in parallel or sequential)

So, `npm install node-sass concat autoprefixer postcss-cli npm-run-all --save-dev`. Let's now write some scripts that'll execute our process.

![https://lh3.googleusercontent.com/proxy/GfUuINVyqc0ef52oCb1vBYqYYg73ZY_B_upNkT0-RBTWFQ8KixeoHrQ71RWqWWhbY45ruBmfc3S4JGgH1ml2dJOfx7pYtrnQJPWXvn-OuLjVrCnBzK0tBhaadmjenIN5jq_qW1L2k-X7jlpQV52ZgoG3KCoKCJJ6v1s](https://lh3.googleusercontent.com/proxy/GfUuINVyqc0ef52oCb1vBYqYYg73ZY_B_upNkT0-RBTWFQ8KixeoHrQ71RWqWWhbY45ruBmfc3S4JGgH1ml2dJOfx7pYtrnQJPWXvn-OuLjVrCnBzK0tBhaadmjenIN5jq_qW1L2k-X7jlpQV52ZgoG3KCoKCJJ6v1s)

## 👨‍💻 Writing Scripts to Execute

I'm going to show the scripts object down below (in _package.json_) and later on explain each one of it. You can refer to them, if any of it doesn't make sense.

```json
    "scripts": {
            "compile:sass": "node-sass sass/main.scss css/style.comp.css",
    				"concat:css": "concat -o css/style.concat.css css/style.comp.css css/any-other-file.css",
            "prefix:css": "postcss --use autoprefixer -b \"last 10 versions\" css/style.comp.css -o css/style.prefix.css",
            "compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",
            "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"
    }
```

Before we explain, I want you to know we are have our sass in **sass/main.scss** which will be processed and stored in **css/** folder. (if you dont write sass, make two folders one as input where you've written css by yourself and output where the program is going to store the css files after execution) **P.S.**: _folder names are arbitary_

## 🙌 Explanations

You can run these scripts by simply typing, `npm run **your-command-name**` to your **terminal**.

### 1️⃣ **_compile:sass_ _(optional)_**

It's only if you write in Sass, you need this step otherwise skip it. This will just compile your sass code to browser readable css.

- `compile:sass` : name of package
- `node-sass` : name of package, we installed above
- `sass/main.scss` : address of our manually written sass file
- `css/style.css` : address where the resulting output of css file will be stored

### 2️⃣ _concat:css (optional)_

If you have your css in more than one file, then you'd probably want to combine them into one css file which is better for your browser which only would have to make one HTTP request instead of two.

- `concat` : package name
- `-o` / `--output` : denotes the output file
- `css/style.concat.css` : address of output file where all combined css is going to be stored
- `css/style.comp.css` : file returned from step 1
- `css/any-other-file.css` : anyother css file which needs to be combined in the final

**P.S.:** If you have just one file this step doesn't make any sense. So skip, but make sure your keep **track of the trail** i.e. _which file is returned from which step and which one is being put_.

### 3️⃣ **prefix:css**

This is the command with which your css is going to have vendor prefixes like `-webkit-`, `-moz`, `-ms-` and `-o-`, which otherwise you'd have to add manually.

> Vendor prefixing is a way for browser makers to add support for new CSS features before those features are fully supported in all browsers.

[How and why you would want to use CSS vendor prefixes in your website](https://www.lifewire.com/css-vendor-prefixes-3466867)

- `postcss` : package name (autoprefixer is a part of postcss)
- `--use` : list of postcss plugins to use (i.e _autoprefixer_, _here_)
- `autoprefixer` : package name which prefixes our css
- `-b` : b is for browsers so we can specify which browsers to make our css compatible for
- `"last 10 versions"` : this fetches last 10 versions of all major broswers from [caniuse.com](http://caniuse.com)
- `css/style.concat.css` : address of file we're going to put
- `-o` : option for output
- `css/style.prefix.css` : address output file

**P.S.:** While writing `last 10 versions` I faced an issue, which was because of the double quotes as it is included inside another double quotes, so we need to escape this using `\` before every double quote inside the main double quotes.

### 4️⃣ _compress:css_

This will **reduce your css file size** to a great extent resulting in faster page loads.

- `node-sass` : package name
- `css/style.prefix.css` : file containing the input for this command (uncompressed css)
- `css/style.css` : address of the output file (compressed css)
- `--output-style compressed` : command to make the compression

**P.S.:** You can choose to output the compressed css into another css file, like `style.min.css` which is alright, but you'll then need to add a link tag to your html to include this.

### 5️⃣️ _build:css_

At last you want to run all of this by running just one command.

- `npm-run-all` : package name
- `compile:sass concat:css prefix:css compress:css` : list of commands in order of their sequence for execution

**FunFact:** You can add `--parallel` after the package name in this to run all the processes simultaneosly which is helpful in some places, but not here. Why? Because here, each script is like a function which takes a file as input and its output file is required in the next function/script, which isn't possible if they run simultaneously.

## 🤝 Conclusion

Finally, we've setup our build process which means your project is now one command away from being ready for deployment, which is `**npm-run-all build:css**`. So in a nutshell this process,

- Combines all different files of your css in one single file, to **minimize the number of HTTP requests you make**
- Sets up prefixes for required tags for a **wide range of browsers** **automatically** by fetching data from [caniuse.com](http://caniuse.com) so you don't have to manually
- Makes your final css which is to be used in browser much **compressed**, that means **faster page loads.**

![https://media.giphy.com/media/UWVSWOwzCEZK6yKB1l/giphy.gif](https://media.giphy.com/media/UWVSWOwzCEZK6yKB1l/giphy.gif)

### 💖 Over to You

I love **writing** as much as **learning new technologies**. However the truth is, the journey is never easy. And that is the only reason I write what I write, coz these were once the questions that I faced as a beginner and I want to help others who have the same ones that I did.

**So I am curious about what difficulties or questions you once faced or are facing as a beginner? 🤷‍♂️ _Reply in this thread, as we can all learn from each other. 👇_**
