var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost/sandbox";

MongoClient.connect(url, function(err, db) {
    var humans = db.collection("humans");
    humans.insert({
        name: "Вася";
        age: 19;
    }, function(err, result){
        console.log(result);
    }
    );
});