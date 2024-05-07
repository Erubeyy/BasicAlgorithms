const clearDuplicates = (arr) => {
    let uniqueNums = {};

    for(let num of arr){
        if(!uniqueNums[num] && typeof num === 'number') uniqueNums[num] = 1;
    }

    return Object.keys(uniqueNums);
}

console.log(clearDuplicates([1,2,1,1,1,3,3,3,4,5]));