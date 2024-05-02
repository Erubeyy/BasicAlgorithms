const splitArray = (array, maxItems) => {
    
    let result = [];

    for(let i = 0; i < array.length; i++){
        
        let lastElement = result[result.length - 1];

        if(!lastElement || lastElement.length === maxItems){
            result.push([array[i]]);
        }else{
            lastElement.push(array[i])
        }

    }

    return result
}

console.log(splitArray([12, 14, 15, 9, 8, 7, 1], 2));