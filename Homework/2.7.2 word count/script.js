var btn = document.getElementById("count"), text, word, count;

function sort(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
}

function addWord(dictonary, word) {
        if (!(word in dictonary)) {
            dictonary[word] = 0;
        }
        dictonary[word] += 1;
    };
    
btn.addEventListener("click", function(){
    text = document.getElementById("textarea").value;
    text = text.trim();
    text = text.split(" ");
    for (var i = 0; i < text.length; i++) {
            if (text[i] == "") {
                delete text[i];
            }
        }
    for(var i = 0; i < text.length; i++){
        addWord(text, text[i]);
        delete text[i];    
    }    
      var values = Object.values(text);
      values.sort(sort);
      var keys = Object.keys(text);
      var res = values[0];
      
      for(var key in text) {
        if (text[key] == res){
            alert("Чаще всех использовалось слово \"" + key + "\"");
        }
      };
});