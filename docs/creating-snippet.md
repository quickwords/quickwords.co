# Creating a snippet

## Making a Plain Text snippet
Go to the _Snippets_ tab and press the _plus_ icon. Choose your trigger, ie the word you want to trigger your replacement. We suggest prefixing all triggers with a special character, that is normally not used very often, like a semicolon. Remember that Quickwords listens to all keystrokes everywhere in the system, so it doesn't know if you want to replace something or just type a regular word. That's why it's important to choose a **unique** name.

## Using regular expressions *
Regular expression (regex for short) is a set of special characters, that mean something. For example, if you want to match everything that starts with `abc` and then has three random characters at the end, you could use a regular expression to achieve that: `abc.{3}`.
Explanation:
- `.` - matches any character,
- `{n}` - requires `n` of the preceding character/character set.

A useful example of using regex is to specify a format of something you want to be returned. For example, you could write a snippet `;date(.+)`, that would be passed into a JavaScript function, which would return a date in specified format.

[Full regex documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

**Warning: If you choose to use a regular expression, make sure your trigger is not longer than the chosen _Stored Characters_ value.**

## Writing Javascript-powered snippet *
Quickwords supports JavaScript scripts as things to be executed, when a trigger is matched.
All scripts must be in given format:
```js
function qw(trigger) {
    // user-defined code goes here
}
```
`trigger` is a variable that holds a value to the trigger that got matched. It is especially useful when using regex-powered snippets matching.

### Returning a string or a number
```js
function qw(trigger) {
    return 'abc' // valid
    return 10 // valid
    return { a: 'a' } // invalid - objects are not supported. Use JSON.stringify explicitly
    return [1, 2, 3] // invalid - arrays are not supported. Use JSON.stringify explicitly
}
```

### Returning a promise
When you want to use asynchronous code, Promises are supported. A Promise must resolve with a string or a number.
```js
function qw(trigger) {
    return new Promise((resolve, reject) => {
        resolve('abc')
        resolve(10) // valid
        resolve({ a: 'a' }) // invalid - objects are not supported. Use JSON.stringify explicitly
        resolve([1, 2, 3]) // invalid - arrays are not supported. Use JSON.stringify explicitly
        resolve() // invalid - promise must resolve with a string or a number
        setTimeout(() => resolve('value'), 5001) // invalid - takes longer than 5 seconds
    })
}
```
::: warning
A promise-based function must be resolved within 5 seconds. Otherwise it will fail with an error: "QWError: Function timed out after 5 seconds of inactivity".
:::

### async/await (experimental)
Since async/await is a syntactic sugar over Promises, and is now supported in Node, Quickwords also supports it. One limitation you may encounter, is that the built-in editor may show some warnings. They appear, because JSHint, which is used in the background, doesn't support ES7 yet. These warnings may be ignored though, as they are not relevant. This is a **valid** javascript code for Quickwords:
```js
async function qw(trigger) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    headers: {
      'Accept': 'application/json',
    },
  })

  const data = await response.json()

  return `Title is: ${data.title}`
}
```

::: warning
An asynchronous function must be resolved within 5 seconds. Otherwise it will fail with an error: "QWError: Function timed out after 5 seconds of inactivity".
:::

## Supported functions
All Node's built-in functions are supported. Quickwords provides also additional two functions:
- `fetch(input[, options])` - browser-like fetch. See [known differences](https://github.com/bitinn/node-fetch/blob/master/LIMITS.md) between browser-based fetch and here-provided one. [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- `exec(command[, options][, callback])` - function to execute any command from shell. [Documentation](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)

## Errors
Whenever a user-defined function errors, Quickwords will replace a trigger with one of the given errors:
- "QWError: Used snippet code is not a function"
- "QWError: Function timed out after 5 seconds of inactivity"
- "QWError: \<js built-in error\>" - eg. "QWError: SyntaxError: Unexpected token function"
