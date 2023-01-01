## Requirement

You are building a tool to download a file from a server. The server may not always be available, so you need to retry the download if it fails.

Write a function that takes in a URL and returns the contents of the file at that URL as a string.

Use p-retry to retry the download if it fails. The p-retry function should be passed a function that makes a GET request to the URL and returns a promise for the file contents.

To avoid overwhelming the server, you should set a maximum number of retries to 5. You should also implement error handling to catch any errors that may occur during the requests.

## Example

```javascript
const fileContents = await downloadFile("https://www.example.com/file.txt");
console.log(fileContents);
// 'This is the contents of the file'
```

## Hint

- [sindresorhus/p-retry: Retry a promise-returning or async function](https://github.com/sindresorhus/p-retry)
