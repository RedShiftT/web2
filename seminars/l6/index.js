const mongodb = require('mongodb').MongoClient;

mongodb.connect('mongodb://localhost/sandbox', (err, db) => {
    if (!err) {
         var books = db.collection("books");
         books.find({ year:{$gt: 1970, $lte: 2000} }).toArray((err, doc) => {
             doc.forEach((book) => {
                 console.log(book.name + ", " + book.year);
             });
         });
       
    }else{
         console.log('все через попу... опять');
    }
});