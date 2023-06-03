function palindrome(text){
    let reverted = text.split('').reverse().join('');

    return reverted === text;
}

console.log(palindrome('otto') ? 'It is palindrome' : 'It isnt palindrome');