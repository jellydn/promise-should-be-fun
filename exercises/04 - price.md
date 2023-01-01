## Requirements

You are building a tool to process a list of items. Each item needs to go through a series of transformations before it is ready to be used.

Write a function that takes in a list of items and an array of transformation functions and returns a list of the transformed items.

## Example

```javascript
const items = [
  { name: "apple", price: 0.5 },
  { name: "banana", price: 0.25 },
];
const transformations = [addTax, addShipping, addDiscount];
const processedItems = await processItems(items, transformations);
console.log(processedItems);
/*
[
  {name: 'apple', price: 0.575},
  {name: 'banana', price: 0.3}
]
*/
```

## Hint

- [sindresorhus/p-waterfall: Run promise-returning & async functions in series, each passing its result to the next](https://github.com/sindresorhus/p-waterfall)
