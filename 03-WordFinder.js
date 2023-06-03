word = 'erubey'
phrase = 'Erubey, es mi nombre, eRubey;, pero no se que significa ERUBEY.'

function wordFinder(phrase, search){

    let cleanText = phrase.toLowerCase().replace(/[.,;:]/gi, '');
    let res = 0;

    if(cleanText.includes(search)){
        let words = cleanText.split(' ');
        let map = {};

        for(let word of words){
            if(map[word]){
                map[word]++;
            }else{
                map[word] = 1;
            }
        }

        res = map[search]
        return res

    }else{
        return res
    }
}

console.log(`The word '${word}' was found '${wordFinder(phrase, word)}' times`);