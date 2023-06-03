text = 'alexis';

function revert(text){
    let reverted = '';

    for(let letter of text){
         reverted = letter + reverted;
    }

    return reverted
}

console.log(`The reverted word of ${text} is ${revert(text)}`)