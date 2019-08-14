var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.findAll = function () {
    return find();
}
function find() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("TestDB");
        dbo.collection("user").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            return result;
        });
    });
}