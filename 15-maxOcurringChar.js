const maximumOcurringChar = (str) => {
    let repeats = {};
    let repeatsNum = 0;
    let result = ''

    let cleanStr = str.split(' ').join('').toLowerCase().replace(/[^a-z]/, '');
    
    for(let char of cleanStr){
        if(!repeats[char]){
            repeats[char] = 1;
        }else{
            repeats[char] += 1;
        }
    }

    for(const [key, value] of Object.entries(repeats)){
        if(value > repeatsNum) {
            repeatsNum = value;
            result = key;
        }else if(value === repeatsNum){
            result += key;
        }
    }

    return result.split('').join(' ')

}

console.log(`The most repeated character or characters: ${maximumOcurringChar('Th;isIs a Ran/dom str.ing fo,r bas1C exA[[MPle')}`);