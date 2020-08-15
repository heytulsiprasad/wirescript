---
title: "Use ternaries rather than && in JSX"
date: "2020-08-03T18:30:00.000Z"
description: "The tragedy is one of the largest industrial accidents involving the explosive chemical, and it hit Lebanon amid the coronavirus pandemic and an economic crisis."
category: "Frontend"
banner: "./banner.png"
---

# What problems can happen when you use && to conditionally render content in JSX

![Man Standing in a Metro](./man-standing-in-metro.jpg)

<figcaption>Man in the middle</figcaption>

## What's wrong with this code?

```jsx
function ContactList({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.length &&
          contacts.map(contact => (
            <li key={contact.id}>
              {contact.firstName} {contact.lastName}
            </li>
          ))}
      </ul>
    </div>
  );
}
```

Not sure? Let me ask you another question. What would happen with the above code if contacts was `[]`? That's right! You'd render 0!

The solution? Use a ternary to be explicit about what you want rendered in the falsy case. In our case, it was nothing (so using null is perfect):

```jsx
function ContactList({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.length
          ? contacts.map(contact => (
              <li key={contact.id}>
                {contact.firstName} {contact.lastName}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
```

# So what gives?

Really, the problem in both of these cases is we're using && to do conditional rendering. Said differently, we're using && to do conditional argument passing. Remember, JSX is a simple syntactic abstraction over calling React.createElement. So it'd be like trying to write this:

# Use actual branching syntax

So I strongly suggest that rather than abusing && (or || for that matter) in your JSX, you use actual branching syntax features, like ternaries (condition ? trueConsequent : falseConsequent) or even if statements (and in the future, maybe even do expressions).

# Conclusion

I'm well aware that we could've solved the contact problem by using !!contacts.length && ... or contacts.length > 0 && ... or even Boolean(contacts.length) && ..., but I still prefer not abusing the logical AND operator for rendering. I prefer being explicit by using a ternary.
