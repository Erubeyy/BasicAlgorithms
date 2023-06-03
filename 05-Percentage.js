percentageVal = 43
number = 100

function percentage(per, num){
    let operation = (num * (per/100));

    return operation
}

console.log(`The ${percentageVal}% of ${number} is equal to: ${percentage(percentageVal, number)}`)