function toZero(number){
    let result = `--- From ${number} to 0 --- \n`;

    while(number > 0){
        result += `- nº${number} \n`;
        number -= 8;
    }

    if(number <= 0){
        result += '- nº0 \n';
    }

    result += '--- The End ---';

    return result;
}

console.log(toZero(100))