var express = require('express');
var app = express();
var port = process.env.PORT || 7777;
var users = require('./User');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*")
    next();
});

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/user', function (req, res) {
    MongoClient.connect(url, (err, client) => {
        const db = client.db('TestDB')
        const collection = db.collection('user')
        collection.find().toArray((err, items) => {
            res.json(items)
        })
    })
});

app.get('/user/:id', function (req, res) {
    MongoClient.connect(url, (err, client) => {
        const db = client.db('TestDB')
        const collection = db.collection('user')
        collection.find({ id: parseInt(req.params.id) }).toArray((err, items) => {
            res.json(items)
        })
    })
});
app.post('/newuser', function (req, res, next) {
    MongoClient.connect(url, (err, client) => {
        const db = client.db('TestDB')
        const collection = db.collection('user')
        collection.find().toArray((err, items) => {
            var lastID = items[items.length - 1].id + 1;
            req.body.id = lastID;
            collection.insertOne(req.body, (err, result) => {
                res.json(req.body);
            })
        })

    })
});
app.put('/updata/:id', function (req, res) {
    MongoClient.connect(url, (err, client) => {
        const db = client.db('TestDB')
        const collection = db.collection('user')
        collection.updateOne({ id: parseInt(req.params.id) }, { '$set': req.body }, (err, item) => {
            res.send(item)
        })
    })
})
app.delete('/delete/:id', function (req, res) {
    MongoClient.connect(url, (err, client) => {
        const db = client.db('TestDB')
        const collection = db.collection('user')
        collection.deleteOne({ id: parseInt(req.params.id) }, (err, item) => {
            res.send(item)
        })
    })
})
app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});