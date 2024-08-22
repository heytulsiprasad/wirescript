---
title: "How to paginate queries in Firestore?"
date: "2024-08-21"
description: "How to create pagination using firestore queries?"
keywords: "Pagination, Firestore, Pagination using Firestore"
category: "Firebase"
---

I recently had to create a paginated list view at work using Firebase which took a considerable amount of research and learning good practices, so writing this for someone who’s looking to hook up pagination in their existing firestore database or even for my future self in 5 months who has forgotten everything once again! 😅

Firebase is a backend as a service (BaaS) platform, that enables us build and grow applications without having to write our own backend. You just plug and play whatever services you need on the go and you only pay for what you use in the long run. Now if you’re here already, I expect you might have used Firebase by now, but if not just follow the instructions it’ll make sense slowly.

## Table of contents

1. [Getting Started](#getting-started)
2. [Building the app](#building-the-app)
3. [Implementing Pagination in Firestore](#implementing-pagination-in-firestore)
4. [Tips and Best Practices](#tips-and-best-practices)
5. [Conclusion](#conclusion)

## Getting Started

We need to setup a react project with firebase to begin working with, along with database support using firestore. If you need help using setup you can follow along in [this](https://dev.to/thebuildguy/building-an-entire-fullstack-project-with-firebase-10-and-react-vite-dfe) blog, it’s pretty straightforward. So without any further ado, let’s jump into some coding.

Tip: You don’t have to note down all the code snippets from here, you can access this entire working repo from the following repo. 🌟

{% github https://github.com/heytulsiprasad/find-mates %}

## Building the app

Now that you know the importance of pagination and firestore as well 😅, this is how you start achieving that. We’re going to build a directory called find mates, of over 10k peoples which you can search through and view details about the people from the paginated views.

![Home page of find mates app](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2k5ycnb46luvj5wa8n9j.png)

We’re using good old Next 14 and tailwind with daisyUI for styles. If you go through the repo, we’ve a pretty straight forward structure.

- The each individual card is called, PeopleCard
- PeopleList is the list container holding all the people in the paginated view.
- Paginator is just the row containing current page info and previous/next buttons.
- You can ignore DevSection, I used that to add the peoples data to firestore, using [faker](https://fakerjs.dev/).

![Code structure of find mates](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r9hdzrum4yood9py1k7n.png)

After that, you can create a new firebase project and add the variables to a local env file named as, `.env.local`

```txt
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

As you can see I also have an Auth Context to store authentication info, but later I realized I didn’t need this for the demo. It was for creating a bunch of users in secure way.

## Implementing Pagination in Firestore

Great, now that you’ve setup the repo, we can move on to fun things.

We’re going to start by looking how our firestore data looks like. As we’re having lots of people’s data to be stored, we’ll create a people collection and store each people as a document inside the collection.

If you’ve anything huge to store you have to store them as documents inside a collection like tweets or list of people etc, as a document has a 1MB upper limit so we can’t basically store infinite amount of data and also we could use more advanced firebase queries and filters on collections to get the data we need. You can learn more about it with an example [here](https://cloud.google.com/firestore/docs/data-model#hierarchical-data).

This is how my firestore dashboard looks like.

![Firestore dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1vz3g27ma5j28wzfhrzc.png)

Now you can create a component where you want to show the paginated data and upon it’s render we need to fetch the number of people data we want to show on one page. Let’s call it: `PEOPLE_PER_PAGE`. We’ll start by creating all the state variables that we need.

```jsx
const [peopleList, setPeopleList] = useState([]);
const [afterThis, setAfterThis] = useState(null);
const [beforeThis, setBeforeThis] = useState(null);
const [page, setPage] = useState(1);
const [totalPeople, setTotalPeople] = useState(0);
```

Here these are the following use cases of these variables:

- `peopleList` : list of all people’s that are shown in current page
- `afterThis`: snapshot of the last document in a page query. we’ll use it to start fetching the documents from after this document in a next page query.
- `beforeThis`: snapshot of the first document in a query. we’ll use it to start fetching the documents from before this document in a previous page query.
- `page` : index of current page
- `totalPeople` : the total number of people exists in database

If you’re getting intimidated by all this don’t, coz we’ll see one by one how is each property being used and initiated.

### 1. Getting total number of people

Let’s first update the `totalPeople` value as based on it we’ll declare which page we’re currently showing. I’ve passed the searchTerm as a parameter as based on what the user searches, the total page (available people) changes.

```jsx
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  getCountFromServer,
  limitToLast,
  endBefore,
  where,
} from "firebase/firestore";

// Get total count of people in Firestore (based on search term)
const getTotalCount = useCallback(async searchTerm => {
  const collectionRef = collection(db, "people");
  const q = query(
    collectionRef,
    where("firstName", ">=", searchTerm),
    where("firstName", "<=", searchTerm + "\uf8ff"),
  );

  const aggregateQuerySnapshot = await getCountFromServer(q);
  const count = aggregateQuerySnapshot.data().count;

  setTotalPeople(count);
}, []);

// Initiate value of total pages inside component
const TOTAL_PAGES = Math.ceil(totalPeople / PEOPLE_PER_PAGE);
```

In the above query, we’re using where to filter out the people names by firstName which match with our searchTerm. Here “> =” is used in alphabetical manner, which means it returns all the documents in which `firstName` starts with or comes after `searchTerm` alphabetically. The addition of `"\uf8ff"` is a special unicode character, and is used as a sort of "maximum" character, allowing the query to include all possible variations of a string that start with a certain prefix.

### 2. Fetch first batch of data on render

Now we need to create the first query that we should run when the component renders. This will fetch the first batch of data that we want to show and user can continue from there by pressing next and previous buttons and we’ll have separate handlers for those.

```jsx
// Fetch data based on searchTerm
const fetchData = useCallback(async searchTerm => {
  const collectionRef = collection(db, "people");
  let q;

  if (searchTerm) {
    q = query(
      collectionRef,
      where("firstName", ">=", searchTerm),
      where("firstName", "<=", searchTerm + "\uf8ff"),
      orderBy("firstName"),
      limit(PEOPLE_PER_PAGE),
    );
  } else {
    q = query(collectionRef, orderBy("firstName"), limit(PEOPLE_PER_PAGE));
  }

  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach(doc => {
    items.push(doc.data());
  });

  setPeopleList(items);
  setAfterThis(querySnapshot.docs[querySnapshot.docs.length - 1]);
}, []);
```

We use `orderBy` firstName to arrange the list of people names in ascending order and `limit` method to limit the total number of people to fetch per query.

In order to actually run it, we need to call the above two functions inside an useEffect. We must pass the parameter `searchTerm` to the useEffect dependency as if that changes, our queries are also changed and we need to fetch it again. Here’s how it looks.

```jsx
// Fetch data on initial render and when searchTerm changes
useEffect(() => {
  // Fetch data based on searchTerm
  fetchData(searchTerm);

  // Get total count of people and store in state
  getTotalCount(searchTerm);
}, [searchTerm]);
```

This is why when we search something, we get a new batch of data as this useEffect basically re-runs and both our current data and total page count is changed. Don’t worry about the individual People card components, I’ll show the entire code in a few.

**Before search:**

![Home page of find mates without search](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/31g7sloaa68mvhuhj6co.png)

**After search:**

![Home page of find mates with search](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/73w1auipews5rlln6y9a.png)

### 3. Handlers for previous and next buttons

Now all we need are the handlers for previous and next button and show everything in a fancy design then we’re good to go. Here’s how you can create the handlers.

```jsx
const handleNext = async () => {
  const collectionRef = collection(db, "people");
  const q = query(
    collectionRef,
    orderBy("firstName"),
    limit(PEOPLE_PER_PAGE),
    startAfter(afterThis),
  );

  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach(doc => {
    items.push(doc.data());
  });

  setAfterThis(querySnapshot.docs[querySnapshot.docs.length - 1]);
  setBeforeThis(querySnapshot.docs[0]);

  setPeopleList(items);
  setPage(page => page + 1);
};

const handlePrev = async () => {
  const collectionRef = collection(db, "people");
  const q = query(
    collectionRef,
    orderBy("firstName"),
    limitToLast(PEOPLE_PER_PAGE),
    endBefore(beforeThis),
  );

  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach(doc => {
    items.push(doc.data());
  });

  setAfterThis(querySnapshot.docs[querySnapshot.docs.length - 1]);
  setBeforeThis(querySnapshot.docs[0]);

  setPeopleList(items);
  setPage(page => page - 1);
};
```

**Working of next handler:**

- We use the same format of querying as with earlier queries, however one thing that’s new here is the `startAfter`
- We store the last document snapshot in the `afterThis` state value and we pass it to `startAfter` method in order for the query to start looking for documents from `afterThis` doc.
- We also increment the page index by 1 after running the next handler.

**Working of previous handler:**

- Similarly we use `beforeThis` here to store the first document in the current people list.
- The `endBefore` method in Firestore is used to create a query that retrieves documents ending before a specified document.
- We decrement the page index by 1 after running the previous handler.

### 4. Creating the Paginator component

The `Paginator` component shows the previous and next buttons as well as the current page shown out of total pages. This contains all the handlers and values we need to show the required data inside. it. You can see how it looks below.

![Paginator component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2xaf3yxk3bcaf753ov4v.png)

```jsx
const Paginator = ({
  page,
  totalPages,
  handleNext,
  handlePrevious,
  nextDisabled,
  prevDisabled,
}) => {
  return (
    <div className="w-full flex items-center justify-between">
      <button
        className={clsx("btn btn-primary", prevDisabled && "btn-disabled")}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <p className="text-lg">
        Showing page {page} / {totalPages}
      </p>
      <button
        className={clsx("btn btn-primary", nextDisabled && "btn-disabled")}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
```

Here’s how the return statement looks of our container PeopleList looks like.

```jsx
<div className="px-8 mt-12">
  {/* Pagination */}
  <Paginator
    page={page}
    totalPages={TOTAL_PAGES}
    handleNext={handleNext}
    handlePrevious={handlePrev}
    nextDisabled={page === TOTAL_PAGES}
    prevDisabled={page === 1}
  />

  <div className="grid grid-cols-3 lgmax:grid-cols-2 mdmax:grid-cols-1 gap-x-4 gap-y-8 place-items-center">
    {peopleList.map(
      ({
        _id,
        avatar,
        birthday,
        email,
        firstName,
        lastName,
        jobTitle,
        sex,
      }) => (
        <PeopleCard
          key={_id}
          avatar={avatar}
          fullName={`${firstName} ${lastName}`}
          jobTitle={jobTitle}
          email={email}
          birthday={birthday}
          sex={sex}
        />
      ),
    )}
  </div>
</div>
```

### 5. Creating the PeopleCard

Now we’ll look at creating the people card to display the people info with some aesthetics! ✨

As we know, `peopleList` is the current batch of people’s data that’s fetched from firestore, we’re simply mapping over this list and passing the available data to PeopleCard (which looks as below). Let’s see inside PeopleCard. If you click on “Connect” you can connect with these imaginary people over email as well, let me know how it goes! 😅

```jsx
/* eslint-disable @next/next/no-img-element */
import React from "react";

const PeopleCard = ({ avatar, birthday, email, fullName, jobTitle, sex }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure className="w-36 aspect-square mx-auto">
        <img
          src={avatar}
          alt={`Avatar of ${fullName}`}
          className="rounded-2xl"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center w-full">{fullName}</h2>
        <h3 className="card-normal">Job: {jobTitle}</h3>
        <h3 className="card-normal">Email: {email}</h3>
        <h3 className="card-normal">
          Birthday:{" "}
          {new Date(birthday).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h3>
        <div className="card-actions justify-center mt-2">
          <a className="btn btn-primary" href={`mailto:${email}`}>
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
```

![People card component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u5a4v5tse2282ox2moto.png)

## Tips and Best Practices

Even though pagination is not always the best option, but in case of large datasets (imagine an ecommerce dashboard) we probably want to use pagination. However there are some tips that you can keep in mind for a seamless integration.

1. **Efficient Querying:** Ensure your Firestore collection is properly indexed, especially on fields you frequently query and order by. This can significantly speed up your queries and prevent Firestore from throwing an error due to missing indexes.
2. **Handle empty states edge cases:** When you’ve reached the last page of your query or on the first page (where you need to disable prev button), you’ve to make sure user knows it which page they’re on and if they’ve reached the end of the data set.
3. **Caching and performance:** ChatGPT suggested this, so I’m still in awe of how advanced AI has become. If you’re dealing with reading large amounts of data, you should do some sort of caching (or debouncing as well for potential users spamming the prev/next buttons). If you’re reading lots of data you’re also getting charged for total reads, hence it’s better as much as you can reduce this load on your server (also on your bank balance 😅)

Here’s more info about firebase [pricing](https://firebase.google.com/pricing). Left column is for free tier.

![Pricing section of firebase](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uptwjg0qmnb3h1ob50qx.png)

## Conclusion

I hope you’ve learned something new today and will be able to implement pagination in your apps now successfully. Even if now infinite scrolling is the new trend, most apps still need pagination. Now even [Google removed their infinite scroll](https://www.theverge.com/2024/6/25/24185727/google-search-continuous-scrolling-doomscrolling-graveyard) and back to it’s paginated view. It’s a sure shot way to save you some bucks on overall reads on your server. 💰

![Google pagination](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8gva4ro4l4428kledwys.png)

If you like this post, share with your friends and follow me on [X/Twitter](https://x.com/thebuildguy) to know more nifty hacks on tech and stay tuned for more such content!
