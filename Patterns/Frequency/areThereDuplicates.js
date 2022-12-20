const areThereDuplicates = (...args) => {
    let lookup = {}

    for(let value of args) {
        if(lookup[value]) return true;
        lookup[value] = (lookup[value] || 0) + 1;
    }

    return false
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true