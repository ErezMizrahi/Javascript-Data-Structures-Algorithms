//given 2 strings check if the seconed string is an angram of the first string

//2 loops
const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    let lookup = {};

    [...str1].forEach(c => lookup[c] ? lookup[c] += 1 : lookup[c] = 1)

    for(let char of str2) {
        if(!(lookup[char])) return false;
        lookup[char] -= 1;
    }
 


       return true;
}


//3 loops 
const validAnagram2 = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    
    let str1Freq = {};
    let str2Freq = {};
    
    for (let c of str1) {
        str1Freq[c] = ( str1Freq[c] || 0 ) + 1;
    }
    
      for (let c of str2) {
        str2Freq[c] = ( str2Freq[c] || 0 ) + 1;
    }
    
    for(let key in str1Freq) {
        if(!(key in str2Freq)) return false;
        if(str1Freq[key] !== str2Freq[key]) return false;
    }
    
    return true;
  }
  
  console.log(validAnagram('anagram', 'nagaram'))
  console.log(validAnagram('aaz', 'zza'))
  console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))
  console.log(validAnagram('qwerty', 'qeywrt'))