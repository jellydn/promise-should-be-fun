## Requirements

You are building a tool to transform a list of images. Each image needs to go through a series of transformations before it is ready to be used.

Write a function that takes in a list of image URLs and an array of transformation functions and returns a list of the transformed images as data URLs.

Use p-pipe to compose the transformation functions into a reusable pipeline. The p-pipe function should be passed an array of functions that each take in an image URL and return a promise for the transformed image as a data URL.

## Example

```javascript
const imageUrls = [
  "https://www.example.com/image1.jpg",
  "https://www.example.com/image2.jpg",
];
const transformations = [resize, addWatermark, convertToPng];
const processedImages = await transformImages(imageUrls, transformations);
console.log(processedImages);
// ['data:image/png;base64,...', 'data:image/png;base64,...']
```

## Hint

- [sindresorhus/p-pipe: Compose promise-returning & async functions into a reusable pipeline](https://github.com/sindresorhus/p-pipe)
