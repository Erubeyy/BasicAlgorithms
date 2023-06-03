function stair(number){
    let complete_stair = '';

    for(let level = 1;  level <= number; level++){
        let steps = '';
        for(let step = 1; step <= level; step++){
            steps += '[-]';
        }
        complete_stair += steps + '\n';

    }
    return complete_stair
}

console.log(stair(5))