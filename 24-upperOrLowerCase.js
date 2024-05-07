const transformString = (str) => {
    const regex = /[A-Z]/
    let countUpper = 0;
    let countLower = 0; 
    for(let char of str){
        if(regex.test(char)) countUpper++
        else countLower++
    }
    
    if(countUpper > countLower) return str.toUpperCase();
    else if(countUpper === countLower) return str[0].toUpperCase() + str.slice(1).toLowerCase();
    else return str.toLowerCase();
}

console.log(transformString('ERUbEy'))