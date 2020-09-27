---
title: "Top Five CORS Issues You Don't Want To Run Into"
date: "2020-09-27"
description: "The guide to fixing all the CORS issues in your application and beyond."
keywords: "Top CORS Issues, Access Control Allow Origin Cors Header, SameSite cookie blocked"
category: "NodeJS"
banner: "./banner.png"
---

# What is CORS?

CORS stands for [Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), which uses additional HTTP headers to tell browsers to give a web application running at one origin, access to resources from different origin. For instance, if your frontend is hosted on a different platform than your backend so you'd need to make HTTP requests to get your data from there, which the browser blocks by default (as its hosted on a cross-origin, not same-origin). This is a security measure we take to protect our clients from [CSRF attacks](https://portswigger.net/web-security/csrf). That's where the concept of CORS comes in.

Now I'll walk you through all the CORS errors that kept me up at night this week and how to fix each one of them.

# No Access Control Allow Origin header is present

I was completely unknown regarding cors, so I wrote my express app and added a proxy in React's `package.json` to get access to the backend routes in development. But once I went to production my app stayed in its loading state and my console showed up these errors.

![1.png](1.png)

The routes were different as I couldn't grab the screenshot of my own error, but the message was same. It didn't work online although my prod succeeded and everything worked locally.

Its trying to say that our origin is blocked by CORS policy so we can't access the data from backend. It also says, **no** `Access-Control-Allow-Origin` header is present in which is a HTTP header which says which origins can have access to our data. We need to add our frontend endpoint on it so it can send all its data to us upon request.

## Fix

You can add the mentioned HTTP header to your response from the server to not get such errors anymore. It can easily be done by adding this to your root file in server.

```jsx
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
```

The `*` is a wildcard which allows all the origins (websites) to make requests to your server and it'll not throw anymore such CORS errors.

# Access Control Allow Origin header in response must not be wildcard \*

Well the problem is, if you're sending some credentials like cookies in your request, which means you have `withCredentials: true` (in axios) or `credentials: 'include'` (in fetch) then it'll again block the request with an error something like this.

![2.png](2.png)

This is my actual error message, if its not readable read below.

```markdown
The value of the `Access-Control-Allow-Origin` header in the response must not be the wildcard `*` when the request's credentials mode is `include`. Origin is therefore not allowed access. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
```

It means the server won't allow requests from all the origins when it gets specific credentials such as cookies from the user, so we get blocked by CORS, again.

## Fix

Just add your frontend URL or any other website you want to have access to your API in place of `*`. If you have more than one, then feel free to comma separate it.

# Response to preflight request doesn't pass access control check

## What is Preflight?

A preflight request is made to see if CORS protocol is understood and whether it is safe to send the original requests. The requests such as `DELETE, PUT` or other methods that can amend data and having request headers that are not [CORS-safelisted](https://developer.mozilla.org/en-US/docs/Glossary/CORS-safelisted_request_header) can make this preflight request. It is an `OPTIONS` request , using three HTTP request headers: `Access-Control-Request-Method` , `Access-Control-Request-Headers`, `Origin` refer this [MDN article](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request).

This is the error message which you'll get if your backend is not preflight enabled.

![3.png](3.png)

## Fix

We can fix it easily by sending back the response `Access-Control-Allow-Methods` header with all the allowed HTTP methods and a response status of `200` , upon getting an `OPTIONS` request. So let's add to our middleware.

```jsx
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
```

# Access Control Allow Credentials header in response is ' ' which must be 'true' when the request credentials mode is 'include'

`Access Control Allow Credentials` is also a header that needs to be present when your app is sending requests with credentials like cookies, i.e. you have `withCredentials: true` (in axios) or `credentials: 'include'` (in fetch). This is the message you get upon not having this header and sending credentials along with request.

![4.jpg](4.jpg)

## Fix

You can add this header along with other headers as shown above.

```jsx
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
```

# Pro Tip

If you're using express/connect then you have a ready made [Node.js CORS middleware](https://github.com/expressjs/cors#readme) package that does this exact thing of adding headers for you in a convinient way. You can install it with, `npm install cors`.

As said it is so easy to setup, if you only need basic cors features enabled you can just write.

```jsx
const cors = require("cors");
app.use(cors());
```

It is also configurable, but the default config is:

```jsx
{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
```

So by default your:

- `Access Control Allow Origin` is `*`
- `Access Control Allow Methods` is `GET,HEAD,PUT,PATCH,POST,DELETE`
- Pass the CORS preflight response to the next handler, false.

You can configure it according to your apps needs, here is the [list of available options](https://github.com/expressjs/cors#configuration-options).

This is how I chose to do for [my app](https://github.com/heytulsiprasad/talkto-frontend).

```jsx
const origin =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_PROD_URL
    : process.env.FRONTEND_LOCAL_URL;

// Setting up cors
app.use(
  cors({
    origin: origin,
    preflightContinue: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
```

The credentials key sets the `Access-Control-Allow-Credentials` to true. You can also do the same by adding each headers as we discussed above.

```jsx
const origin =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_PROD_URL
    : process.env.FRONTEND_LOCAL_URL;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Credentials", true);

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
```

# My app's still showing CORS issues in console but don't know whats wrong

This happened to me, I only used MSFT Edge primarily and Firefox for testing so in both browsers my app worked fantastically. But the people I gave to check my app complained of getting a CORS error. It turns out all of them used Chrome which I haven't tested yet, so I grabbed Chrome and had a look into it, whose console still showed me the 2nd CORS issue we fixed above. What the heck!

Then after fiddling with the networks tab for a bit, a small warning ⚠️ symbol grabbed my attention which upon hover said,

```markdown
A cookie associated with a cross-site resource at <url> was set without `SameSite` attribute. It has been blocked, as Chrome now delivers cookies with cross-site requests if they are set with `SameSite=none` and `Secure`.
```

It turns out earlier this year, (February 2020) with [release of Chrome 80](https://blog.chromium.org/2020/02/samesite-cookie-changes-in-february.html) it has a secure by default cookie classification system, which needs a `SameSite` attribute on cookies to be accessible by the browser. It has three values, `Lax, Strict, None` and you have to decide which one should your cookie use depending upon freedom you want to give.

After googling a shit ton, this article by heroku came up, [Chrome's Changes Could Break Your App: Prepare for SameSite Cookie Updates](https://blog.heroku.com/chrome-changes-samesite-cookie) which explained why we need this and how to add this attribute.

So as you're here, I'll say you how I fixed this.

## Fix

I used one package [express-session](https://github.com/expressjs/session#readme) which is a simple session middleware to handle creating session and storing in MongoDB with [connect-mongo](https://www.npmjs.com/package/connect-mongo.) plugin. You can configure it similar to the cors package for your apps requirements.

So, all I had to do was add a `sameSite` attribute to it's `cookie` settings and it worked perfectly.

```jsx
const session = require("express-session");

const sessionConfig = {
  // ... other methods
  cookie: {
    sameSite: "none",
  },
};

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies
}

app.use(session(sessionConfig));
```

I took care that the secure property must be `true` only in production environment, which means only origins with HTTPS can access the cookies. And trust proxy is `1` which it trusts the first hop from front-facing proxy server. To know more, refer [docs on trust-proxy](http://expressjs.com/en/guide/behind-proxies.html).

# Summary ✨

CORS is really important and useful for protecting your users from [CSRF attacks](https://portswigger.net/web-security/csrf) and similarly the new updated policy on Same Site attributes by Google is helpful. Although it may seem frustrating upon getting these set of errors constantly for two long days (which I did), in the end I got to know so many aspects of making a secure server and safe authentication which was worth it in the end.

Feel free to check the project I build which is an [Authentication app](https://talk-to.vercel.app/), I made this to learn local and OAuth strategies using Passport and Sessions. You can find the source code on my [GitHub](https://github.com/heytulsiprasad/talkto-frontend).
