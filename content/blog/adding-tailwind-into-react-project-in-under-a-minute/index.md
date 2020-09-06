---
title: "Adding Tailwind into React project in under a minute"
date: "2020-09-06"
description: "Learn how to add an utility first CSS framework, TailwindCSS into your React projects"
keywords: "Tailwind in React, Tailwind CSS, Tailwind Gatsby, Tailwind Nextjs"
category: "React"
banner: "./banner.png"
---

Last time I was adding tailwind to my React project, it took me around 30 mins to do the research and referring to previous projects to finally get those utility classes working. So I thought to make a checklist for anyone or even me in future to refer while thinking of using Tailwind in React.

**Note** In no way is the following methods are the only way of adding Tailwind to your React projects, but it seems to work in most cases for me. If you have any opinions do recommend your own ways in threads down below, I might add it to this blog in coming days.

# Step 1 — Setting up React with CRA template

Install the CRA template first, by running

```jsx
npx create-react-app cool-demo
```

# Step 2 — Installing npm packages

Once it's done, move on to the `package.json` and have a look on all packages you have. Now in order to add and configure **tailwind**, we need to add some additional packages for convinience.

The additional packages are:

```jsx
yarn add tailwindcss postcss-cli autoprefixer @fullhuman/postcss-purgecss npm-run-all
```

1️⃣ `tailwindcss` is the official npm package of tailwind and is key package for our project

2️⃣ `postcss-cli` is a tool to transform styles with JS plugins

3️⃣ `autoprefixer` is a postcss plugin which automatically does vendor prefixing from referring [caniuse.com](http://caniuse.com) which is such a blessing

4️⃣ `@fullhuman/postcss-purgecss` is another postcss plugin, which gets rid of all the unused css styles resulting in smaller builds

5️⃣ `npm-run-all` to run multiple build scripts at the same time or one after the other

# Step 3 — Setting up Tailwind files

Now its time to add the tailwind files to our project. We need to create two files, one is `tailwind.css` that tells what stuff to include from tailwind library and second is the `tailwind.config.js` which helps in configuring tailwind accroding to our favour.

Create the above two files manually or by copy pasting the below in terminal.

```bash
touch src/tailwind.css tailwind.config.js
```

1️⃣ `tailwind.css`

Now this file will be referred by `tailwindcss` npm package which will then generate a huuuge tailwind css file with all our utility classes in it.

But first, we need to add which type of classes we need. So add this to your `tailwind.css` , just created file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2️⃣ `tailwind.config.js`

As explained above you shall configure it yourself according to your needs. Know how to do this on the [great docs by Tailwind](https://tailwindcss.com/docs/configuration#creating-your-configuration-file). In my case, I like to have a desktop first approach than mobile, which is totally opposite of what's default in Tailwind so this is what I like to begin with.

```jsx
module.exports = {
  purge: [],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {},
  plugins: [],
};
```

**Protip** Instead of creating the `tailwind.config.js` yourself and copy pasting any boilerplate you can run this `npx` command to get you a skeleton setup to get started.

```jsx
npx tailwindcss init
```

Also pass the `--full` flag in the end to get the entire config file for tailwind.

```jsx
npx tailwindcss init --full
```

# Step 4 — Creating the postcss config

Configuring `postcss` in our project with its additional plugins.

Create a file named `postcss.config.js` in your root folder or just copy this to terminal.

```bash
touch postcss.config.js
```

Now update the file with our installed plugins and tailwind.

```jsx
// Configure purgecss plugin
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./public/**/*.html",
    "./src/**/*.jsx",
    // etc.
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

    return broadMatches.concat(innerMatches);
  },
});

// Export all plugins our postcss should use
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
```

If you've never heard of [Purgecss](https://purgecss.com/), it's another plugin for postcss which helps us trim the gigantic css file tailwind produces and narrow it down to only the classes/styles that we've included in our codebase.

Notice, we're using this plugin only in `production` as in development it's not much of a concern and can be slow to run, so better we took care of that. And rest are `tailwindcss` and `autoprefixer` which as mentioned, vendor prefixes our css stylings, like.

```css
-o-transition: all 4s ease;
-webkit-transition: all 4s ease;
-ms-transition: all 4s ease;
-moz-transition: all 4s ease;
transition: all 4s ease;
```

# Step 5 — Writing the build scripts

Here is when we'll use the `npm-run-all` [package](https://www.npmjs.com/package/npm-run-all). So basically, what we want to do is create some npm scripts that watches and compiles our tailwind file whenever we make any changes to it.

To not confuse you let me get to it one by one.

1️⃣

```json
"build:tailwind": "postcss src/tailwind.css -o src/tailwind.generated.css"
```

You'll need to run it for once before publishing the build and all it does is take `src/tailwind.css` as an input file and outputs the css classes as required into `tailwind.generated.css` and `-o` is for output.

2️⃣

```json
"watch:tailwind": "postcss -w src/tailwind.css -o src/tailwind.generated.css"
```

The only difference between this and above is the `-w` flag, that is for watch and now whenever you update the `tailwind.css` file you'll see the changes take effect instantly.

3️⃣

```json
"start": "react-scripts start"
"dev": "run-p watch:tailwind start"
```

Now finally sticking them together, while running `npm start` we can get our react to work, but to watch for changes in `tailwind.css` file we need to add the `run-p watch:tailwind` command.

`run-p` is a from our `npm-run-all` package and all it does is run our given scripts in parallel. So here we can run both `npm run watch:tailwind` and `npm run start` at the same time, instead of switching terminals.

4️⃣

```json
"prebuild": "npm run build:tailwind",
"build": "react-scripts build",
```

Ultimately we need the build commands for deploying our app, so lets add them. One thing you should know is `pre` keyword is special here, it means anytime our `build` command will be executed, before it the `prebuild` must execute. Same with `prestart` and `start`.

There's also `post` keyword to do the vice versa, like `postbuild` to run a script after running `build` script. However, I haven't yet used it.

**This is the list of same commands all together, with some default ones for testing.**

```json
"scripts": {
        "build:tailwind": "postcss src/tailwind.css -o src/tailwind.generated.css",
        "watch:tailwind": "postcss -w src/tailwind.css -o src/tailwind.generated.css",
        "start": "react-scripts start",
        "dev": "run-p watch:tailwind start",
        "prebuild": "npm run build:tailwind",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
},
```

Now we're done with setting up scripts for tailwind to run, feel free to add anyother script you need for your use case.

# Step 6 — Include tailwind in code

The worst thing that could happen while not working tailwind css code, is this. You forgot to include the generated css file in the entry file to your project. So go ahead and add this line to your `index.js` or `App.js` wherever you feel its right and works for you.

```jsx
import "./tailwind.generated.css";
```

Also you might want to `.gitignore` this file as it's a huuuge css file filled with utility classes and you might not want to clutter up your project on GitHub.

## Lets see if it works

Try adding some classes you know from tailwind, like font colors or margins and see if it works.

I tweaked the `App.js` file and added `text-yellow-400` and `text-green-600` classes to the text elements and this is what I got.

![Demo of Create React App](./demo.png)

# Additional setup

While research for this blog, I encountered a package called [cssnano](https://www.npmjs.com/package/cssnano) which has over 6m downloads on npm, you can check it's [website](https://cssnano.co/) which shows an amazing example.

It's another postcss plugin that removes all the weird comments we write in our css files like this and whitespaces and minifies it for further compressed bundle size. Check that out.

_Share your setups below or any insights on what I'm doing right or wrong. I'm always a ping away, on Twitter [@heytulsiprasad](https://twitter.com/heytulsiprasad)._
