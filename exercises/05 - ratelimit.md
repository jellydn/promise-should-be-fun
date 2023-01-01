## Requirements

You are building a tool to fetch data from a remote API. The API is rate-limited, so you need to cache the results of API calls to avoid going over the limit.

Write a function that takes in a URL and returns the data from the API at that URL as a JSON object.

To avoid going over the rate limit, you should set a maximum age for the cache of 5 minutes. If a cached result is older than 5 minutes, it should be discarded and a new request should be made to the API.

## Example

```javascript
const data = await getData("https://api.example.com/users");
console.log(data);
// [{...}, {...}, ...]

// This call is cached
const data2 = await getData("https://api.example.com/users");
console.log(data2);
// [{...}, {...}, ...]
```

## Hint

- [sindresorhus/p-memoize: Memoize promise-returning & async functions](https://github.com/sindresorhus/p-memoize)
