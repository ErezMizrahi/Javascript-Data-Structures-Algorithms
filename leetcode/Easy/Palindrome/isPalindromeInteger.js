
const isPalindrome = (number) => {
    if(number < 0) return false;
    let div = 1

    while (number >= div * 10) {
        div *= 10
    }

    while( number ) {
        let right = number % 10
        let left = Math.round(number / div)

        if(left != right) {
            return false;
        }

        number = Math.round((number % div) / 10)
        div = div / 100
    }

    return true;
}


console.log(isPalindrome(1221))