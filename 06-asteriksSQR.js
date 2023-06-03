function side(number){
    let side = "";
    for(let i = 0; i<number; i++){
        side += "*";
    }
    return side;
}

function sqr(number){
    let paint = side(number) + "\n";
    let  content = "";
    for(let i = 0; i<number-2; i++){
        content = '*';
        for(let j = 0; j<number-2; j++){
            content += ' ';
        }
        content += '*';
        paint += content + "\n"
    }
    paint += side(number);
    return paint;
}

console.log(sqr(10))