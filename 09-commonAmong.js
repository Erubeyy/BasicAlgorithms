function common(array1, array2){

    const filtered = array1.filter(element => array2.includes(element))

    return filtered;
}

console.log(common([4, 5, 6, 7, 9, 10, 14], [7, 8, 6, 9, 7, 5, 15]));