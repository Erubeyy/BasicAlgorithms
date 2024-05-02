
function sqr(number){
    let square = '\n';

    for(let i = 0; i < number; i++){

        if(i === 0 || i === number-1){
            for(let i = 0; i < number; i++){
                square += "* ";
            }
            square += '\n'

        }else{
            square += '*';

            for(let j = 0; j < number*2-3; j++){
                square += ' ';
            }
            
            square += '*\n';
        }

    }

    return square;
}

console.log(sqr(8))

