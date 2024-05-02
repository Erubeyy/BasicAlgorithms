const cleanStr = (str) => {
    return str.split(' ').join('').toLowerCase().replace(/[^a-z]/g,'')
}

const isAnagram = (word1, word2) => {
    let str1 = cleanStr(word1);
    let str2 = cleanStr(word2);
    let wordChars = {};

    if(str1.length !== str2.length) return false

    for(let char of str1){
        wordChars[char] = (wordChars[char] || 0) + 1;
    }
    
    for(let char of str2){
        if(!wordChars[char]) return false;
        else{
            wordChars[char]--;
        }
    }

    return true
}

console.log(isAnagram('ssewsr./.,,giao', 'rieasws!@/gso'))