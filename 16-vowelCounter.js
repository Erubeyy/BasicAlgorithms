/* 
const vowelCounter = (str) => {
    const vowels = ['a','e','i','o','u'];
    let counter = 0;

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            counter++;
        }
    }

    return counter
} 
*/

const vowelCounter = (str) => {
    const vowels = ['a','e','i','o','u'];
    let vowelsCounter = {};
    let result = 0;

    for(let char of str.toLowerCase()){
        if(!vowelsCounter[char]){
            if(vowels.includes(char)){
                vowelsCounter[char] = 1;
            }
        }else{
            vowelsCounter[char]++
        }
    }

    for(let val of Object.values(vowelsCounter)){
        result += val;
    }

    return result 
}

console.log(`Number of vowels: ${vowelCounter('ErubeyCazares.dev')}`)