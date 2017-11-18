function textContainsAllWords(words, text){
    var containsAllWords = true;
    for(var i = 0; i < words.length; i++){
        var result = text.indexOs(words[i]);
        if (result === -1){
            containsAllWords = false;
            return false;
        }
    }
    return true;
}