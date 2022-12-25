// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

const flatten = (items) => {
    const flat = [];
    items.forEach(item => {
      if (Array.isArray(item)) {
        flat.push(...flatten(item));
      } else {
        flat.push(item);
      }
    });
  
    return flat;
}

console.log(
    flatten([1, 2, 3, [4, 5] ]), // [1, 2, 3, 4, 5]
    flatten([1, [2, [3, 4], [[5]]]]), // [1, 2, 3, 4, 5]
    flatten([[1],[2],[3]]), // [1,2,3]
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
);

// console.log(...[1,2])