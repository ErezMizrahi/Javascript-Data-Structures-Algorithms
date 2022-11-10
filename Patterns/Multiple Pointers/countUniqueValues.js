// implement a function that takes a sorted array and count the unique values
// the array can have nagative values but it will always be sorted

const countUniqueValues = (arr) => {
    if(arr.length === 0) return 0
    let leftPointer = 0
    let rightPointer = 1

    while (rightPointer < arr.length ) {
        
        if(arr[leftPointer] === arr[rightPointer]) {
            rightPointer++

        } else {

            leftPointer++
            arr[leftPointer] = arr[rightPointer]
            
        }
    }

    return leftPointer + 1
}


console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4