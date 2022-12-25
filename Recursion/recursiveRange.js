// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

const recursiveRange = (num) => {
    return num && num + recursiveRange(num - 1)
}


console.log(
recursiveRange(6), // 21
recursiveRange(10) // 55 
);