
function reverseNum(number){
    let reversed = parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
    
    return reversed
}

console.log(reverseNum(-123))