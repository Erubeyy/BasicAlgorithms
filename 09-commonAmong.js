function common(array1, array2){

    const filtered = array1.filter(element => {return array2.includes(element)})

    return filtered;
}

console.log(common([4,5,6,7],[7,8,9,7,5]));