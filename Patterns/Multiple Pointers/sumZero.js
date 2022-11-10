//write a function that accepts a sroted array of integers
//the function should return an array with the two values that sums to zero or undefeind if we cant sum to zero

// O(n^2) time | O(1) space  solution 
/* const sumZero = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}*/

//only works when the array is sroted
// O(n) time | O(1) space  solution 
const sumZero = (arr) => {
   let leftPointer = 0
   let rightPointer = arr.length - 1

   while(leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer]
    
    if(sum === 0) {
         return [arr[leftPointer], arr[rightPointer]]; 
    }

    if(sum > 0) {
        rightPointer--
    } else {
        leftPointer++;
    }
   }
}

console.log(sumZero([-3,-2,-1,0,1,2,3])) //[-3,3]
console.log(sumZero([-2,0,1,3])) // undefiend