// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string,
// without their order changing.

const isSubsequence = (str1, str2) => {
    let left = 0;
    let right = 0;

    while (left < str1.length && right < str2.length) {
        if(str1[left] === str2[right]) {
            left += 1;
        }

        right += 1
    }

    return left === str1.length;

}


console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)