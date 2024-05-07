const isCapicua = (number) => {
    let numStr = number.toString();
    let reversed = '';

    for(let char of numStr){
        reversed = char + reversed;
    }

    return numStr === reversed;
}

console.log(isCapicua(2103012));
