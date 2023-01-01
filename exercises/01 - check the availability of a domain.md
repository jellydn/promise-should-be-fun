## Requirements

You are building a tool to check the availability of multiple domain names. Write a function that takes in a list of domain names and returns a list of objects containing the domain name and a boolean indicating whether it is available for purchase or not.

To check the availability of a domain, you will need to make a HEAD request to a domain availability API. The API will return a 200 status code if the domain is available, and a 404 status code if it is not available.

You should also implement error handling to catch any errors that may occur during the requests.

## Example

```javascript
const domains = ["example.com", "example.net", "example.org"];
const availability = await checkDomainAvailability(domains);
console.log(availability);
/*
[
  { domain: 'example.com', available: true },
  { domain: 'example.net', available: false },
  { domain: 'example.org', available: true }
]
*/
```

## Hint

- [sindresorhus/p-map: Map over promises concurrently](https://github.com/sindresorhus/p-map)
