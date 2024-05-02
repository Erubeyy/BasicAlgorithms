const repeatString = (word, times) => {
    
    let result = '';
    for(let i = 0; i < times; i++){
        result += word;
    }
    
    return result;
    // Simple way of repeating a string with a js method
    // return word.repeat(times)
}

console.log(repeatString('Erubey', 2))