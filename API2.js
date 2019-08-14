const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
mongo.connect(url, (err, client) => {
    const db = client.db('TestDB')
    const collection = db.collection('user')
    // collection.find().toArray((err, items) => {
    //     console.log(items)
    // })
    collection.insertOne({FirstName: 'Roger'}, (err, result) => {
    })
})