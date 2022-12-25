// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
    if(arr.length === 1) return arr[0];

    const product = arr[0] * arr[arr.length - 1];
    arr.pop();
    arr.shift();
    arr.push(product);
    return productOfArray(arr)
    
}
console.log(
    productOfArray([1,2,3]), // 6
    productOfArray([1,2,3,10]) // 60
);