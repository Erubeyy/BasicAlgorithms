const permutation = (arr, num) => {
    for(let i = 0; i < num; i++){
        if(i+1 !== arr[i]) return false   
    }
    return true
}

console.log(permutation([1,  3, 4, 5], 5))