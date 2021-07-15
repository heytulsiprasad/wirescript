---
title: "How to use Webview in React Native?"
date: "2021-05-26"
description: "Here's how you can use WebView inside React Native to display websites or entire web apps natively inside your application"
keywords: "WebView, React Native Webview, React Native, Mobile Webview Development"
category: "Mobile"
---

A webview is an embedded browser that can be used to display web pages inside your React Native applications. It can display anything starting from custom HTML elements to entire web applications inside React Native.

In React Native, we can use the Webview by using a third-party package called, [react-native-webview](https://github.com/react-native-webview/react-native-webview). This is the official implementation of webview after it was removed from the [React native core](https://github.com/react-native-community/discussions-and-proposals/pull/3) to keep the core as lean as possible.

In this post, we're going to implement a simple project to see how to work with Webview's on React Native and what are some of the good use cases it serves.

## Create a React Native project

To get started we need to begin a new project with React Native CLI. You can do this with expo if you don't want to go through a tedious installation process.

```
npx react-native init ExperimentingWithWebview
```

With Expo:

If you're using Expo, you can jump straight to **Implementing a Basic WebView** after this.

```jsx
expo install react-native-webview
```

## Add dependencies

```bash
// For npm users
npm install react-native-webview
```

```bash
// If you're using yarn

yarn add react-native-webview
```

## Link native dependencies

You'll only need this if you're not using Expo and using React Native CLI to start your project.

If you're using `react-native` ≥ 0.60 autolinking will take care of this step so feel free to skip, but don't forget to run `pod install`

```bash
react-native link react-native-webview
```

If you ever uninstall this package,

```bash
react-native unlink react-native-webview
```

### For iOS and macOS

If using cocoapods, in `ios/` or `macos/` directory run,

```bash
pod install
```

### For Android

If you're using react-native-webview < 6: Feel free to skip

If you're using react-native-webview ≥ 6.x.x

Make sure AndroidX is enabled in your project by editing `android/gradle.properties`

```
android.useAndroidX=true
android.enableJetifier=true
```

_Chances are this is already done by React Native CLI automatically._

## Implementing a basic WebView

It's time to get rid of the boilerplate code inside `app.js` and write our code for webview.

```jsx
// App.js

import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: "https://medium.com/" }} />
      </SafeAreaView>
    </>
  );
};

export default App;
```

This is all you need to do inorder to display a website into your application.

![https://i.imgur.com/QlJOdOW.png](https://i.imgur.com/QlJOdOW.png)

## `originWhitelist` prop

This is a list of origin strings that you are allowed to navigate inside the webview component. It takes an array of strings. By default it's values are, `http://` and `https://`. If the user navigates to a new page that isn't in whitelisted origins, the URL will be handled by the OS.

```jsx
<WebView
  source={{ uri: "https://www.educative.io/" }}
  originWhitelist={["https://*", "git://*"]}
/>
```

## Loading local/inline HTML files

You can also load local or inline HTML files into a Webview and this is how you can achieve that.

```jsx
const sourceHtml = require("./src/index.html"); // your html file here

export const App = () => <WebView source={{ html: sourceHtml }} />;
```

Or add some inline HTML.

```jsx
export const App = () => {
  const htmlSource =
    '<h1 style="font-size:100px; padding: 50px; text-align: center;">Hello World 🌍</h1>';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ html: htmlSource }} />
    </SafeAreaView>
  );
};
```

![https://i.imgur.com/XAboNuF.png](https://i.imgur.com/XAboNuF.png)

## Injecting custom javascript to webview

You can also add your own javascript that can run inside the webview. You can use it to manipulate the behavior of the website you're loading as per your needs.

There are two ways to do this:

1. `injectedJavascript` prop
2. `injectJavascript` method

Their names can be confusing so shall understand them based on their purpose, it'll be clear to you in a few examples.

## `injectedJavascript` prop

This is a prop to the Webview component which contains the scripts that'll run once the web page loads for this first time. It only runs once, even if the webpage is reloaded or navigated away.

For example

```jsx
import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  const scripts = `
      document.body.style.backgroundColor = 'hotpink';
      document.querySelector("h1").style.color = 'skyblue';
      document.querySelector("p").style.padding = '20px';
      true;
    `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://www.example.com/" }}
        injectedJavaScript={scripts}
      />
    </View>
  );
};

export default App;
```

![https://i.imgur.com/JiurUbs.png](https://i.imgur.com/JiurUbs.png)

## `injectJavascript` method

As we know the above `injectedJavascript` prop that we discussed only works on first load and there is no other way if we want to run scripts at multiple times or page navigations. That's why, Webview exposes this method `injectJavascript` on its reference.

Example

```jsx
import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

class App extends React.Component {
  render() {
    const scripts = () => {
      const color = getRandomColor();

      return `
      document.body.style.backgroundColor = '${color}';
      document.body.style.color = '${color}';
      document.body.querySelector("a").style.color = '${color}';
      true;
      `;
    };

    setInterval(() => {
      this.webref.injectJavaScript(scripts());
    }, 500);

    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={r => (this.webref = r)}
          source={{ uri: "https://www.example.com" }}
        />
      </View>
    );
  }
}

export default App;
```

![https://i.imgur.com/lkuidcw.gif](https://i.imgur.com/lkuidcw.gif)

While all these ways can help you manipulate the webview as per your needs, one more requirement of yours can be sending or receiving data from the webpage inside WebView. So now we'll discuss how you can communicate between your JS and React Native app.

## Communicating between JS and React Native

This requires the use of two things:

1. `window.ReactNativeWebView.postMessage` function
2. `onMessage` prop

The `window.ReactNativeWebView.postMessage` is a function that's exposed to the injected scripts inside WebView. You can basically pass anything to it, provided they're properly serialized. It'll be clear in the below example.

Rest apart, whatever you pass inside `postMessage` can be accessed in React Native through the callback passed into `onMessage` prop. `onMessage` is a prop for the Webview which takes a callback and is triggered anytime a message is sent using `postMessage`.

Example

```jsx
import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

class App extends React.Component {
  render() {
    const scripts = () => {
      const color = getRandomColor();

      return `
      document.body.style.backgroundColor = '${color}';
      document.querySelector("h1").style.color = 'hotpink';    
      
      window.ReactNativeWebView.postMessage(document.body.style.backgroundColor);
      true;
      `;
    };

    setInterval(() => {
      this.webref.injectJavaScript(scripts());
    }, 500);

    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={r => (this.webref = r)}
          source={{ uri: "https://www.example.com" }}
          onMessage={event => console.log(event.nativeEvent.data)}
        />
      </View>
    );
  }
}

export default App;
```

This simply logs the background color of the webpage whenever it's changed. As you can see, we are passing the callback inside `onMessage` prop which gets triggered on `postMessage`.

![https://i.imgur.com/1ke2jJ2.gif](https://i.imgur.com/1ke2jJ2.gif)

The actual event object that's passed inside `onMessage` callback is this, `[nativeEvent.data](http://nativeevent.data)` is the argument we passed inside `window.ReactNativeWebView.postMessage`.

```jsx
{
	"nativeEvent":
			 {
						"canGoBack": false,
						"canGoForward": false,
						"data": "rgb(247, 75, 142)",
						"loading": false,
						"target": 15,
						"title": "Example Domain",
						"url": "https://www.example.com/"
			 }
}
```

## Handling Navigation State Changes

Now we'll discuss how you can intercept whenever a user navigates inside the webview to a different webpage or clicks on any link. You can place a callback that'll happen anytime the route changes.

### `onNavigationStateChange` prop

This takes a callback which is triggered whenever the user navigates inside the webview. It passes the current navigation state as an argument that can be accessed inside the callback.

Example

```jsx
import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

class App extends React.Component {
  handleNavigationStateChanged = navState => {
    const { url, title } = navState;
    console.log({ url, title });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={r => (this.webref = r)}
          source={{ uri: "https://www.example.com" }}
          onNavigationStateChange={this.handleNavigationStateChanged}
        />
      </View>
    );
  }
}

export default App;
```

Basic `navState` param structure passed into `handleNavigationStateChanged`:

```jsx
{
	"canGoBack": false,
	"canGoForward": false,
	"loading": false,
	"target": 3,
	"title": "Example Domain",
	"url": "https://www.example.com/"
}
```

![https://i.imgur.com/W6uvn21.gif](https://i.imgur.com/W6uvn21.gif)

Just as a cool project you can play around with WebView and use many of its available methods such as `goForward` and `goBack`, `stopLoading` (or even add [apple pay support](https://github.com/react-native-webview/react-native-webview/commit/30685edda045f7ba5d1400b415278e1109436dcd)) to replicate a browser-like feel for your users, just like we used `injectJavascript` method above.

## References

You can refer to React Native WebView [docs](https://github.com/react-native-webview/react-native-webview/tree/master/docs) to have an overview of all that it offers or [references page](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md) to grab a look at all the available props and methods. If you're down for the above project, you can go over this [blog tutorial](https://heartbeat.fritz.ai/how-to-handle-navigation-with-webviews-in-a-react-native-app-1ed51ab3342f) if you ever get stuck.
