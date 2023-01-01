## Requirements

You are building a tool to scrape the titles and descriptions of the top 10 articles on a given subreddit. Write a function that takes in a subreddit name and returns a list of objects containing the title and description of each article.

To avoid overwhelming the server, you should set a concurrency limit of 5 when calling p-all. You should also implement error handling to catch any errors that may occur during the requests.

## Example

```javascript
const subreddit = "javascript";
const articles = await getTopArticles(subreddit);
console.log(articles);
/*
[
  { title: 'The best JavaScript features you may not be using', description: 'JavaScript has many powerful features that are not widely used...' },
  { title: '5 tips for optimizing your JavaScript code', description: 'Optimizing your JavaScript code can improve the performance of your application...' },
  { title: 'A beginner's guide to asynchronous programming in JavaScript', description: 'Asynchronous programming is a critical aspect of JavaScript development...' },
  ...
]
*/
```

## Hint

- [sindresorhus/p-all: Run promise-returning & async functions concurrently with optional limited concurrency](https://github.com/sindresorhus/p-all)
