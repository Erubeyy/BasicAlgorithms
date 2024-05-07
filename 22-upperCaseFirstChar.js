// const upperCaseFirstChar = (str) => {
//     let result = str.split(' ');
//     for(let i = 0; i < result.length; i++){
//         result[i] = result[i][0].toUpperCase() + result[i].slice(1);
//     }
//     return result.join(' ');
// }

// WITHOUT USING THE SLICE METHOD
const upperCaseFirstChar = (str) => {
    let result = '';
    for(let index in str){
        if(str[index - 1] === ' ' || index === '0') result += str[index].toUpperCase();
        else result += str[index];
    }
    return result;
}

console.log(upperCaseFirstChar('hola mundo este es un programa muy sencillo!'));