const createSubStr = (str, num) => {
    let result = '';

    if(num >= str.length) return str

    for(let i = 0; i < num; i++){
        result += str[i];
    }

    return result
}

console.log(createSubStr('Web Development Courses', 6))