const odds = (num1, num2) => {
    let cont = 0;
    while(num1 < num2){
        if(num1%2) ++cont
        ++num1;
    }
    return cont
}

console.log(odds(1,100));