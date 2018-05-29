# Manual
Sections marked with a `*` are intended for advanced users.

## What is Quickwords?
Quickwords is an open-source alternative to [Text Expander](https://textexpander.com) written in [Electron](https://electronjs.org). It is available on MacOS (other systems coming very soon).

## What can Quickwords do?
Quickwords is an application that can, but is not limited to, change what you type into a predefined snippet. As an example, you may in your day-to-day work write out your physical address very often. If you think about it, addresses can be very long, so they take a lot of time to type out by hand. Quickwords can help with that. You can create a so-called _snippet_, that would replace `;address` with your address.

## Support for non-standard, non-US keyboards
In theory every keyboard in the world is supported. If you encouner any issues, make sure to contact us on [GitHub](https://github.com/quickwords/quickwords) or mention [@quickwordsapp](http://twitter.com/quickwordsapp) on Twitter.

## What are Stored Characters? *
Quickwords listens to all keystrokes and stores them in memory. We take security measures very seriously. That's why we give you an option to choose, how many characters you want to be stored. Please remember, the lower the number the shorter your triggers can be. That can cause unexpected behaviour with regular-expression-powered snippets.
