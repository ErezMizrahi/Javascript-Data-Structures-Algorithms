const sameFrequency = (num1, num2) => {
    if(num1.length !== num2.length) return false;

    let num1String = num1.toString();
    let num2String = num2.toString();

    
    let lookup = {};

    [...num1String].forEach(c => lookup[c] ? lookup[c] += 1 : lookup[c] = 1)

    for(let char of num2String) {
        if(!lookup[char]) return false;
        lookup[char] -=1;
    }

    return true
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false