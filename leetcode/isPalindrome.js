var isPalindrome = function(x) {
    if(x < 0) return false;
    let number = x.toString()
    let left = 0;
    let right = number.length -1
    let flag = true;
    while (left <= right) {
        if (number[left] != number[right]) {
            flag = false
        }
        
        left++;
        right--;
    }
   
};




console.log(isPalindrome("abbaa"))