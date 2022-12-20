const areThereDuplicates = (...args) => {
    args.sort();
    let i = 0;

    for(let j = 1; j < args.length; j++, i++) {
        if(args[i] === args[j]) return true;

    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true