function get4toto(array){
    var unIque = new Set();

    array.forEach((item) => {
        unIque.add(item);
    });
    return unIque.size;
}