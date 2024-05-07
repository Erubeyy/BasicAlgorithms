// const fibonacci = (number) => {
//     if (number <= 1) return number; 

//     return fibonacci(number - 1) + fibonacci(number - 2);
// }

const fibonacci = (number) => {
    let result = [0, 1];

    for(let i = 2; i <= number; i++){
        result.push(result[i - 1] + result[i - 2]);
    }

    return `${result} -> ${result[number]}`;
}


console.log(fibonacci(14));