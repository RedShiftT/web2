var button = document.getElementById("reqest");
 button.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState != 200){
            console.warn("Ошибка" + this.status);
        }else{
            consele.log("все ок!")
        }
    }
 });