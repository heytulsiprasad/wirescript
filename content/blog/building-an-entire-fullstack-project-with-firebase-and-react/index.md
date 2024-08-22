---
title: "Building an entire fullstack project with Firebase 10 and React (Vite)"
date: "2023-10-03"
description: "Creating a fullstack application in React using Firebase and Vite as the framework."
keywords: "Firebase 10, Fullstack using Firebase"
category: "Firebase"
---

**Firebase** is a BAAS (backend as a service) solution that drives the modern web. The most exciting part of it is you don’t need to configure any server running some server side code, as its all managed by Firebase.

However it’s setup can be time consuming and takes a good amount of to and fro around the documentation. This is why I decided to write this, to make it as a reference for using basic features like authentication, hosting and **firestore operations** (CRUD) to do in firebase/firestore.

**Note**

Recently, firebase shifted its SDKs to a new modular approach with the launch of [Firebase v9](https://firebase.google.com/support/release-notes/js). It brings features like reduced SDK size and greater efficiency with modern JS build tools to optimize your apps (using tree-shaking etc). So we’ll be using it’s new Web Modular API.

{% embed https://twitter.com/Firebase/status/1420112970453897216 %}

## Table of Contents

- Getting Started
- Setting up Firebase
- Setting up the starter files
- Understanding the starter files
- Authentication in Firebase
- Working with Data
- Deploying our project
- Conclusion

## 1️⃣ Getting Started

We’re going to make a fullstack modern todo-list using firebase, react and tailwind stack. I know you’re like, why yet another todolist. But hear me out, we’re not learning how to build a todolist here, we’re here to know about how firebase basic functionailities work so that we can build our cool apps with it.

Here's the link to final repository if you want to play around.

{% embed https://github.com/heytulsiprasad/modern-todolist-v1 %}

## 2️⃣ Setting up Firebase

You can skip to the next section if you know how to setup firebase proejcts already.

Go to Firebase [dashboard](https://console.firebase.google.com/) and after logging in you can click on start a new project.

![firebase dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1nqzq4aa972yh1zojh0b.png)

After giving your project a name, click on continue.

![create project](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a06w8gpi4386ya9if53c.png)

In the next screen, disable Google Analytics as we’re just doing this for learning purposes and then click on **Create Project**. It might take upto ~1 min to create the project, once its done click continue and you can see the dashboard of your firebase console.

![firebase dashboard 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tlh9j88gw3dk1xey572r.png)

In above dashboard, click on settings (gear icon) → **project settings** and then click on the code icon in your apps section. It’ll create a web project inside firebase for us.

![firebase project settings](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1rw8vrxhazpzfmwumofy.png)

Once you’re done with that, you’ll see the below screen and after you enter your app nickname, click on register app. No need of setting up firebase hosting now, as you can host it anywhere or set up at firebase later too.

![create firebase app](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gclinyijhvwxl5qsdcxe.png)

After you register the app you’ll see where these code snippets, which basically are the instructions on how to install firebase in your project. You can copy the firebase config code and paste it somewhere or come back to it later when we’ll install firebase in our app.

![get firebase config](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k3n2e8idvctvn1xyoens.png)

Later click on continue to console. You can see your web app is created now and it’s listed inside your apps section. Awesome, we’ve done the setup inside firebase, lets setup our repository now.

## 3️⃣ Setting up the starter files

We’re going to be using Vite for development with React. It is a performace based build tool that provides a faster development experience. That’s what I love about it, it’s super **duper** fast and supports very fast [hot module replacement](https://vitejs.dev/guide/features.html#hot-module-replacement) (HMR).

All you have to do is run:

```bash
git clone https://github.com/heytulsiprasad/modern-todolist-v1.git
```

Once the repo is cloned, just run `npm install` inside the directory. Now you can access the project pretty much by, `npm run dev`. But you have to replace `firebaseConfig` in `config/firebase.js` with your own firebase config which we got from the web.

If you don’t find it, go to Firebase dashboard → project settings → your apps.

Now firebase is successfully added into our project and we can start building our cool features! 💃

**Note:** You can checkout to final branch later for the final version of the code.

## 4️⃣ Understanding the starter files

In order to save our precious time, we’re not going to code the entire application from scratch, as we’re just here to expand our knowledge on how to interact with our data using Firestore. It has high scalability, advanced query capabilities and real-time updates.

The project is build using several ready made components available within, [Mantine](https://mantine.dev/). It’s a fully featured React components library. However some places still use some custom CSS-in-JS so we used some good ol’ [styled components](https://styled-components.com/).

If you check inside, `App.jsx` we’re storing the user auth in local state of App component. You wouldn’t want something like this in your production though, as now we have various state management libraries for easy stage management, but as we’re just to learn we kinda go with local state.

![todo app homescreen](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b87h3o9t9eo5qr4k52xg.png)

The tabs in Home page, is actually [Tabs component](https://mantine.dev/core/tabs/) from mantine. It’s really easy to setup and just check out their [docs](https://mantine.dev/core/tabs/) if you need any help.

### One last thing before we chunk out code

1. We need to activate authentication from firebase.
2. So go inside dashboard → click on authentication from sidebar and press **Get Started**

![firebase authentication dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/feidpnxn08d05gr3h3ef.png)

1. We need to set up a sign in method in order to authenticate our user, so press on Set up sign-in method and click Add new provider.
2. Let’s choose Google provider for now, as its the most easiest to setup.

## 5️⃣ Authentication in Firebase

As you can see there’s an `Avatar` component in the Navbar, so let’s authenticate our user when he/she clicks on the Avatar component. To start with we’re only going to keep authentication using Google. However, feel free to add more options.

Now, let’s add a `handleAuthentication` callback to run when the user presses Avatar. As you can see in the below code, it’ll by default log in using Google. Here we’re using `signInWithPopup` action to authenticate the user.

```jsx
const Navbar = ({ isAuth, setIsAuth, profile, setProfile }) => {
  const handleAuthentication = async () => {
    console.log("Authenticating user");

    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Set to state
      setIsAuth(true);
      setProfile(user.providerData[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledNav>
      <h1>#modern todolist</h1>
      <div className="profile">
        <Avatar
          onClick={handleAuthentication}
          radius="md"
          src={profile.photoURL}
        />
      </div>
    </StyledNav>
  );
};
```

<aside>

💡 **Note:** If you’re using any domains other than [localhost](http://localhost) to run the website, then upon authentication you’ll get an (auth/unauthorized-domain) error. To fix this you need to add your domain inside authorized domains.

Go to authentication → Settings → Authorized domains → Add domain

</aside>

Now we’ll be able to login using any google account. Let’s code the sign out flow.

As we have a state called, `isAuth` so depending upon if its true we can log out user or else login user, on the same button click.

```jsx
const Navbar = ({ isAuth, setIsAuth, profile, setProfile }) => {
  const handleAuthentication = async () => {...}

  const handleLogout = async () => {
    // Sign out user if authenticated
    console.log("Logging out user")

    try {
      await signOut(auth);

      // Clear state
      setIsAuth(false);
      setProfile({});
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <StyledNav>
      <h1>#modern todolist</h1>
      <div className="profile">
        <Avatar onClick={isAuth ? handleLogout : handleAuthentication} radius="md" src={profile.photoURL} />
      </div>
    </StyledNav>
  );
};
```

This will logout user when they’re logged in and log in the user when they’re logged out.

![modern todolist homescreen](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xzxjw6tcgbn23y5eb46i.png)

If you did the above steps correctly, you’ll be able to see the profile picture of the logged in user in our Avatar section as shown above.

## 6️⃣ Working with data

As we’re done with auth now, we can start adding todos for each user. We’ll be using Firestore SDK for this purpose and we’ll go over the most used CRUD operations so it’ll be easy for us to refer to it back when you’re doing something big.

Before adding our data, we should know:

- Firestore stores all data in a NoSQL manner, inside collections and documents.
- Documents are the smallest unit of storage, each document is known by an id. Documents are very light weight JSON-like records, they’re not exactly JSON but support few more types of data like nested arrays, geo points, server timestamps etc!
- They can collect upto 1MB data max.
- Collections are the container of documents, we can have basically infinite number of documents inside each collection.
- Collections can be also made within documents, they’d be then called **sub collection**. They can also store infinite sub documents.
- If we delete all documents inside a collection, the collection deletes itself.

### 1. Creation of todos

In our app, we’re going to store multiple todos for each user. So the schema would be like, `users/{userId}/todos/{todoId}`. Here, users is the collection and {userId} is the id of the document. `todos` is the sub collection and `{todoId}` is the id of sub document.

We can add documents into firestore in two types:

1. Using `setDoc`
2. Using `addDoc`

We use `setDoc` when we want to give our document a specific id.

```jsx
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "companies"
await setDoc(doc(db, "companies", "google"), {
  name: "Google",
  state: "Bengaluru",
  country: "India",
});
```

But what if we don’t want to take the hassle of giving an id to our document everytime, thus we can let firestore auto generate an id for us.

```jsx
import { collection, addDoc } from "firebase/firestore";

// Add a new document in collection "companies"
let companyRef = await addDoc(collection(db, "companies"), {
  name: "Google",
  state: "Bengaluru",
  country: "India",
});

// companyRef.id = auto generated id
```

Let’s create the todos in our app then. We’ve an Input component that handles the new todo entries by user, so we’re going to add this handler in order to add new todos.

```jsx
// src/components/Input/index.js

const handleInput = () => {
	// Add todo to database
      const todosRef = collection(db, "users", uid, "todos");
      const todoRef = await addDoc(todosRef, {
        completed: false,
        title: value,
        createdAt: serverTimestamp()
      });

      setValue(""); // updates state

      console.log(`Todo created with id: ${todoRef.id}`);
    }
}
```

In above code, we’re first making a reference to todos collection, then using `addDoc` we’re passing that reference and an object of new data that we’ve to add, then firebase creates a new document for us.

This is how todos are created.

### 2. Read all todos

Now in order to display all todos inside each tabs, we need to read all documents from firestore. How do we do that?

We can do that either by fetching all documents once or subscribing to entire todos collection. So that our todos gets updated automatically if new todos gets created/updated/deleted. We’ll go over both of these ways separately.

1. **Read all documents once**

```jsx
async function fetchAllDocuments(uid) {
  const allTodos = [];
  const todosRef = collection(db, "users", uid, "todos");

  const todosSnapshot = await getDocs(todosRef);
  todosSnapshot.forEach(doc => {
    allTodos.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return allTodos;
}
```

The above function calls the function for once, we can put it inside our `useEffect` in order for it to run everytime the component is mounted. However this gets the data one time, if we update/delete or create a new todo, it doesn’t update the list again. For that we need to subscribe to a collection.

1. **Subscribe to entire collection**

```jsx
useEffect(() => {
  if (uid) {
    const todosRef = collection(db, "users", uid, "todos");

    const unsubscribe = onSnapshot(todosRef, querySnapshot => {
      const allTodos = [];

      querySnapshot.forEach(doc => {
        allTodos.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setTodos(allTodos);
    });

    return () => {
      unsubscribe(); // when component unmounts
    };
  }
}, [show]);
```

This is very fast in nature and updates the todos if there’s any change in data. It can also listen for [local changes](https://firebase.google.com/docs/firestore/query-data/listen?hl=en&authuser=0#events-local-changes) itself, which means even before writing to the backend it’ll notify us about the new data. This is called, **[latency compensation](https://firebase.google.com/docs/firestore/query-data/listen#events-local-changes)**.

For this we just pass a query inside an `onSnapshot` function and it takes care of the rest. As this subscription listens forever for new changes, we have to remove them so that our callback functions won’t be called anymore. We can do that calling `unsubscribe` on unmount, as shown above.

### 3. Update todos

We also need the ability to update our todos right? Like as you can see while creating the todos we had a `completed` property which showed if a todo is completed or not. Hence, we use `updateDoc` function to update documents. Here is an example.

```jsx
const handleToggleComplete = async (todoId, status) => {
  const todoRef = doc(db, "users", uid, "todos", todoId);

  await updateDoc(todoRef, {
    completed: !!status, // smart way of converting any type to type Boolean
  });
};
```

As we’ve used `onSnapshot` to subscribe to our todos collection, we don’t need to refetch the latest documents after update, it’ll sync itself.

![modern todoist completed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vd4k92li3dcv04q9hevs.png)

You also get cool ready made methods to update specific types of data such as:

1. In nested arrays: `arrayRemove` and `arrayUnion`
2. In numbers: `increment()`
3. In nested objects: dot notation (`parent.child`)

Refer [original documentation](https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array) for more examples on different languages too.

### 4. Delete todos

Finally, we need the ability to delete todos. This is very simple, we just need to take reference over a todo document and use `deleteDoc` method to delete it.

```jsx
const handleDelete = async todoId => {
  const todoRef = doc(db, "users", uid, "todos", todoId);
  await deleteDoc(todoRef);
};
```

**Note on delete:**

1. Deleting a document doesn’t delete it’s subcollection. So if you want it’s subcollections to also be deleted you need to manually do that by iteration.
2. You can delete a particular field inside an document, by using `deleteField()`

```jsx
import { doc, updateDoc, deleteField } from "firebase/firestore";

const todoRef = doc(db, "users", uid, "todos", todoId);

// Remove the 'capital' field from the document
await updateDoc(todoRef, {
  completed: deleteField(),
});
```

1. You should not delete entire collections from the web client. It’s not as per practice and also your app can get very slow from out-of-memory errors as you need to load all documents.

## 7️⃣ Deploying our project

Nowadays you can deploy your client side web apps almost anywhere for free, like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/) or [Surge](https://surge.sh/) or even [Firebase hosting](https://firebase.google.com/docs/hosting). However as we’re using Firebase in this tutorial, let’s explore deploying with firebase as well.

Go to hosting.

![firebase hosting dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yhd5l0tip33v831x0c3q.png)

**Steps to host your website:**

1. Install firebase tools (`npm install -g firebase-tools`)
2. Initialize your project
   1. `firebase login`
   2. `firebase init`

![firebase command line](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bme14he2bh5tg12vza4z.png)

1. From features list, we need to choose: **Hosting: Configure files for Firebase Hosting**
2. What do you want to use as your public directory: **dist**
3. Configure as a single page app (rewrite all urls to index.html): **yes**
4. Setup automatic deployments to Github: **no**
5. File dist/index.html exists, overwrite? **Yes**
6. Deploy complete ✅

![deploy complete to firebase hosting](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3hbx7sudeiel3o1r300o.png)

Our web app is hosted on: [https://modern-todolist.web.app](https://modern-todolist.web.app/) 🚀

## 🍞 Summary (TLDR)

- Firebase provides all types of solutions for making fullstack projects like authentication, databases (firestore and realtime), hosting etc.
- Firestore is very good for scalability, realtime data syncronisation and advanced querying support. We’re using firestore in this project to make our fullstack app.
- In firestore we’ve certain ways of interacting with data.
  - To read any data, create a reference to it first. Use methods like `collection()` or `doc()` to do the same.
  - Then to create documents use `setDoc()` or `addDoc()` and to modify/update data use `updateDoc()` . To delete doc we use `deleteDoc()`.
  - To read all the docs from a collection, pass reference to collection to `getDocs()` and to read a single doc use `getDoc()` method.
  - We can also subscribe to a collection or document changes, by using `onSnapshot()` and passing reference to it.
  - Use `query()` to query over data source and use above methods to read data.
- Deployment is also easily done by firebase hosting (refer above steps).

## 8️⃣ Conclusion

Basically today we’ve played around with all types of data in firestore, with this knowledge you can build fullstack data centric applications from scratch using just firebase tools. Earlier if your project grows you needed to scale your servers and all manually but with firebase it all happens seamlessly. You can take up it’s blaze plan (pay as you go) which is also very cheap.

Really excited to see what cool stuff you’re building with it. Let me know in comments down below. 😼

_I’m [@thebuildguy](https://twitter.com/thebuildguy) on Twitter, shoot me a DM if you’ve got any questions!_ 👋
